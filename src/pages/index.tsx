// import * as React from "react"
// import type { HeadFC, PageProps } from "gatsby"

// const pageStyles = {
//   color: "#232129",
//   padding: 96,
//   fontFamily: "-apple-system, Roboto, sans-serif, serif",
// }
// const headingStyles = {
//   marginTop: 0,
//   marginBottom: 64,
//   maxWidth: 320,
// }
// const headingAccentStyles = {
//   color: "#663399",
// }
// const paragraphStyles = {
//   marginBottom: 48,
// }
// const codeStyles = {
//   color: "#8A6534",
//   padding: 4,
//   backgroundColor: "#FFF4DB",
//   fontSize: "1.25rem",
//   borderRadius: 4,
// }
// const listStyles = {
//   marginBottom: 96,
//   paddingLeft: 0,
// }
// const doclistStyles = {
//   paddingLeft: 0,
// }
// const listItemStyles = {
//   fontWeight: 300,
//   fontSize: 24,
//   maxWidth: 560,
//   marginBottom: 30,
// }

// const linkStyle = {
//   color: "#8954A8",
//   fontWeight: "bold",
//   fontSize: 16,
//   verticalAlign: "5%",
// }

// const docLinkStyle = {
//   ...linkStyle,
//   listStyleType: "none",
//   display: `inline-block`,
//   marginBottom: 24,
//   marginRight: 12,
// }

// const descriptionStyle = {
//   color: "#232129",
//   fontSize: 14,
//   marginTop: 10,
//   marginBottom: 0,
//   lineHeight: 1.25,
// }

// const docLinks = [
//   {
//     text: "TypeScript Documentation",
//     url: "https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/",
//     color: "#8954A8",
//   },
//   {
//     text: "GraphQL Typegen Documentation",
//     url: "https://www.gatsbyjs.com/docs/how-to/local-development/graphql-typegen/",
//     color: "#8954A8",
//   }
// ]

// const badgeStyle = {
//   color: "#fff",
//   backgroundColor: "#088413",
//   border: "1px solid #088413",
//   fontSize: 11,
//   fontWeight: "bold",
//   letterSpacing: 1,
//   borderRadius: 4,
//   padding: "4px 6px",
//   display: "inline-block",
//   position: "relative" as "relative",
//   top: -2,
//   marginLeft: 10,
//   lineHeight: 1,
// }

// const links = [
//   {
//     text: "Tutorial",
//     url: "https://www.gatsbyjs.com/docs/tutorial/getting-started/",
//     description:
//       "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
//     color: "#E95800",
//   },
//   {
//     text: "How to Guides",
//     url: "https://www.gatsbyjs.com/docs/how-to/",
//     description:
//       "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
//     color: "#1099A8",
//   },
//   {
//     text: "Reference Guides",
//     url: "https://www.gatsbyjs.com/docs/reference/",
//     description:
//       "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
//     color: "#BC027F",
//   },
//   {
//     text: "Conceptual Guides",
//     url: "https://www.gatsbyjs.com/docs/conceptual/",
//     description:
//       "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
//     color: "#0D96F2",
//   },
//   {
//     text: "Plugin Library",
//     url: "https://www.gatsbyjs.com/plugins",
//     description:
//       "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
//     color: "#8EB814",
//   },
//   {
//     text: "Build and Host",
//     url: "https://www.gatsbyjs.com/cloud",
//     badge: true,
//     description:
//       "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
//     color: "#663399",
//   },
// ]

// const IndexPage: React.FC<PageProps> = () => {
//   return (
//     <main style={pageStyles}>
//       <h1 style={headingStyles}>
//         Congratulations
//         <br />
//         <span style={headingAccentStyles}>— you just made a Gatsby site! 🎉🎉🎉</span>
//       </h1>
//       <p style={paragraphStyles}>
//         Edit <code style={codeStyles}>src/pages/index.tsx</code> to see this page
//         update in real-time. 😎
//       </p>
//       <ul style={doclistStyles}>
//         {docLinks.map(doc => (
//           <li key={doc.url} style={docLinkStyle}>
//             <a
//               style={linkStyle}
//               href={`${doc.url}?utm_source=starter&utm_medium=ts-docs&utm_campaign=minimal-starter-ts`}
//             >
//               {doc.text}
//             </a>
//           </li>
//         ))}
//       </ul>
//       <ul style={listStyles}>
//         {links.map(link => (
//           <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
//             <span>
//               <a
//                 style={linkStyle}
//                 href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter-ts`}
//               >
//                 {link.text}
//               </a>
//               {link.badge && (
//                 <span style={badgeStyle} aria-label="New Badge">
//                   NEW!
//                 </span>
//               )}
//               <p style={descriptionStyle}>{link.description}</p>
//             </span>
//           </li>
//         ))}
//       </ul>
//       <img
//         alt="Gatsby G Logo"
//         src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
//       />
//     </main>
//   )
// }

// export default IndexPage

// export const Head: HeadFC = () => <title>Home Page</title>
import * as React from 'react'
import { Link, PageProps, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import ChildWindow, { ChildWindow_Ref } from '../components/ChildWindow';
import { useEffect, useRef } from 'react';
import Layout from '../components/layout';
import jj from '../images/github.svg'

type allMdxType = {
  allMdx: {
    nodes: {
      frontmatter: {
        date: string,
        title: string,
        slug: string,
        tags:Array<string>
      },
      id: string,
      excerpt: string
    }[]
  }
}

// const IndexPage = ({ data }: PageProps<allMdxType>) => {
//   return (
//     <div className="flex flex-col h-screen">
//       <header className=" bg-gray-950 h-20 shrink-0">
//         <div className="flex items-center justify-between h-full ">
//           <div className="text-white text-3xl font-bold p-1">
//             Developer notes
//           </div>
//           <div className=" bg-slate-50 p-1">
//             <a href='https://github.com/oven425'>
//               <svg height="36" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="36" data-view-component="true" className="octicon octicon-mark-github v-align-middle color-fg-default">
//                 <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
//               </svg>
//             </a>
//           </div>
//         </div>
//       </header>
//       <div className="flex flex-row h-[calc(100vh-5rem)] bg-white">
//         <aside className="w-1/6 overflow-y-auto">
//           <ul>
//           <Link to='/'>Blog</Link>
//             <Link to='/about'>About</Link>
//             </ul>

//         </aside>
//         <main className="w-5/6 overflow-y-auto">
//         {/* <ul>
//         {
//           data.allMdx.nodes.map((node) => (
//             <article key={node.id}>
//               <h2>{node.frontmatter.title}</h2>
//               <p>Posted: {node.frontmatter.date}</p>
//               <p>{node.excerpt}</p>
//             </article>
//           ))
//         }

//       </ul> */}
//           main content<br />main content<br />main content<br />main content<br />main content<br />main content<br />main content<br />main content<br />main content<br />main content<br />main content<br />main content<br />main content<br />main content<br />main content<br />main content<br />main content<br />main content<br />main content<br />main content<br />main content<br />main content<br />main content<br />main content<br />main content<br />main content<br />main content<br />main content<br />main content<br />main content<br />main content<br />main content<br />main content<br />main content<br />main content<br />main content<br />main content<br />main content<br />main content<br />main content<br />main content<br />main content<br />main content<br />main content<br />main content<br />main content<br />main content<br />main content<br />main content<br />main content<br />main content<br />main content<br />main content<br />main content<br />main content<br />main content<br />main content<br />main content<br />main content<br />main content<br />main content<br />main content<br />main content<br />main content<br />main content<br />main content<br />main content<br />main content<br />main content<br />main content<br />main content<br />main content<br />
//         </main>
//       </div>

//     </div>

//   )
// };

const IndexPage = ({ data }: PageProps<allMdxType>) => {
  return (

    <Layout>
      <ul className=' m-3'>
        {
          data.allMdx.nodes.map((node) => (
            <article className=' prose prose-lg' key={node.id}>
              <Link to={`${node.frontmatter.slug}`}>
                <h2>{node.frontmatter.title}</h2>
              </Link>
              <p className=' text-blue-400'>Posted: {node.frontmatter.date}</p>
              <p>{node.excerpt}</p>
              <div className='flex flex-row gap-1'>
              {
                node.frontmatter.tags?.map(x=>(
                  <div>
                    <button className=' bg-black text-white p-2'>{x}</button>
                  </div>
                ))
              }
              </div>           
            </article>
          ))
        }
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(
      filter: {frontmatter: {published: {eq: true}}}
      sort: {frontmatter: {date: DESC}}
    ) {
      nodes {
        frontmatter {
          date(formatString: "YYYY-MM-DD")
          slug
          title
          published
          tags
        }
        excerpt
      }
      totalCount
    }
  }
`
export const Head = () => <Seo title="Home Page" />
export default IndexPage;