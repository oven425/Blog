// import * as React from 'react'
// import { Link, useStaticQuery, graphql } from 'gatsby'
// import {
//   container,
//   heading,
//   navLinks,
//   navLinkItem,
//   navLinkText,
//   siteTitle
// } from './layout.module.css'
// import { ReactNode } from '@mdx-js/react/lib';

import { StaticImage } from "gatsby-plugin-image";
import React, { ReactNode } from "react";

// type AppProps = {
//     pageTitle: string;
//     children : ReactNode;
//   };
// const Layout = ({ pageTitle, children }: AppProps) => {
//   const data = useStaticQuery(graphql`
//     query {
//       site {
//         siteMetadata {
//           title
//         }
//       }
//     }
//   `)
//   return (
//     <div className={container}>
//       <header className={siteTitle}>{data.site.siteMetadata.title}</header>
//       <nav>
//         <ul className={navLinks}>
//           <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
//           <li className={navLinkItem}><Link to="/about" className={navLinkText}>About</Link></li>
//           <li className={navLinkItem}>
//             <Link to="/blog" className={navLinkText}>
//               Blog
//             </Link>
//           </li>
//         </ul>
//       </nav>
//       <main>
//         <h1 className={heading}>{pageTitle}</h1>
//         {children}
//       </main>
//     </div>
//   )
// }

// export default Layout

// //https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forms_and_events
// //https://www.gatsbyjs.com/docs/tutorial/getting-started/part-3/
type LayoutProps = {
  title?: string,
  children?: ReactNode
}

//https://blog.camel2243.com/2019/11/14/css-%E6%90%9E%E6%87%82-flex-grow-flex-shirk-%E5%8F%8A-flex-basis-%E4%B8%89%E7%A8%AE%E5%B1%AC%E6%80%A7/
const Layout = (props: LayoutProps) => {
  return (
    <div className="flex flex-col h-screen w-screen bg-red-300">
      <div className=" flex-1 bg-slate-900">
        <div className=" flex justify-between items-center m-3">
          <h1 className="text-slate-200 text-4xl font-bold">Develope Note</h1>
          <a href='https://github.com/oven425'>
            <StaticImage className=" bg-white " src="../images/github.svg" alt="https://github.com/oven425"></StaticImage>
          </a>

        </div>
      </div>
      {/* <div className="flex h-full bg-slate-50">
        <div className="border-r border-gray-400">
          <StaticImage className="rounded-full w-24 h-24" src="../images/Head sticker.jpg" alt="/"></StaticImage>
        </div>
        <div className="flex-1 bg-blue-300">
          {props.children}
        </div>
      </div> */}
      <div className="grid grid-cols-[1fr,4fr] h-full bg-slate-50">
        <div className="border-r border-gray-400">
          <StaticImage className="rounded-full w-24 h-24" src="../images/Head sticker.jpg" alt="/"></StaticImage>
        </div>
        <div className="h-full">
          <div className=" overflow-auto">
            {props.children}
          </div>

        </div>
      </div>

    </div>
  )
}

export default Layout;