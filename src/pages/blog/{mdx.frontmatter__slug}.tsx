import * as React from 'react'
import { graphql, PageProps } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
type DataType = {
    mdx: {
        frontmatter: {
            date: string,
            title: string
        }
    },
    children:React.ReactElement
}

 const BlogPost = ({ data,children }: PageProps<DataType>) => {
//  const BlogPost = ({ data, children }) => {
    //console.log(data)
  //console.log(children)
    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      {children}
    </Layout>
    )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`

export const Head = ({ data }: PageProps<DataType>) => <Seo title={data.mdx.frontmatter.title} />

export default BlogPost