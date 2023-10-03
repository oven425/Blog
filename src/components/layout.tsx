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
  title?:string,
  children?:ReactNode
}

//https://blog.camel2243.com/2019/11/14/css-%E6%90%9E%E6%87%82-flex-grow-flex-shirk-%E5%8F%8A-flex-basis-%E4%B8%89%E7%A8%AE%E5%B1%AC%E6%80%A7/
const Layout = (props:LayoutProps)=>{
  return(
    <div className="flex h-screen w-screen bg-red-300 shrink-0">
      <div>Header</div>
        <div className="h-full">
          <div>Sider</div>
          <div>Content</div>
        </div>
    </div>
  )
}

export default Layout;