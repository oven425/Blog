import { Link, PageProps, graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import React from "react";
type allMdxType = {
    allMdx: {
      group: {
        tag: string
        totalCount: number
      }[]
    }
  }
const TagsPage = ({ data }: PageProps<allMdxType>) => {
    console.log(data)
    return (
      <Layout>
        {
            data.allMdx.group.map(x=>(
                <div>
                    <button className=' bg-black text-white p-2 m-1'>{x.tag}</button>
                  </div>
            ))
        }
      </Layout>
    )
  }
  
  export const query = graphql`
    query {
        allMdx {
            group(field: {frontmatter: {tags: SELECT}}) {
              tag: fieldValue
              totalCount
            }
          }
    }
  `
  export const Head = () => <Seo title="Home Page" />
  export default TagsPage;