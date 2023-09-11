import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
type SeoArgs = {
    title: string;
  };
const Seo = ({ title }:SeoArgs) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <title>{title} | {data.site.siteMetadata.title}</title>
  )
}

export default Seo