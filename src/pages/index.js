
import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default function Home({ data }) {
  return (
    <div>
      <Layout>
        <h1>Gatsby Blog Site</h1>
        {data.allMarkdownRemark.nodes.map(node => (
          <div key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            <p>{node.frontmatter.date}</p>
            <div dangerouslySetInnerHTML={{ __html: node.html }} />
          </div>
        ))}
      </Layout>
    </div>
  )
}

export const query = graphql`
  {
    allMarkdownRemark {
      nodes {
        id
        html
        timeToRead
        frontmatter {
          date
          title
        }
      }
    }
  }
`
