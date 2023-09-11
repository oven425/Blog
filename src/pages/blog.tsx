import * as React from 'react'
import { StaticQueryDocument, graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
type DataType = {
    allFile: {
      nodes: {
        name: string
      }[]
    }
  }
//https://www.gatsbyjs.com/blog/getting-started-with-typescript-in-gatsby
const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
      {
        data.allFile.nodes.map(node => (
          <li key={node.name}>
            {node.name}
          </li>
        ))
      }
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
        nodes {
          name
        }
      }
  }
`

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage