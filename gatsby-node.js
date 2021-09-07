
//関数呼び出し
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

//slug追加
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode })
    //node.fieldにslugの情報追加
    createNodeField({ node, name: `slug`, value: slug })
  }
}

//動的ページ作成
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Get all markdown blog posts sorted by date
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: ASC }
          limit: 1000
        ) {
          nodes {
            id
            fields {
              slug
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  // Get info about markdown files
  const posts = result.data.allMarkdownRemark.nodes

  // Define a template for blog post
  const blogPost = path.resolve(`./src/templates/post.js`)

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id
      const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id

      // create a page from a markdown file
      createPage({
        path: post.fields.slug,
        component: blogPost,
        context: {
          id: post.id,
          slug: post.fields.slug,
          previousPostId,
          nextPostId,
        },
      })
    })
  }
}
