
import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  //const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  return (
    <Layout>
    <Img
      fixed={data.markdownRemark.frontmatter.topImage.childImageSharp.fixed}
    />
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

export default BlogPostTemplate

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
      markdownRemark(fields: {slug: {eq: $slug}}) {
        id
        html
        frontmatter {
          date
          title
          topImage {
            childImageSharp {
              fixed(width: 700) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
   }
`
