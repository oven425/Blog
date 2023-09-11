import * as React from 'react'
import { Link } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText
} from './layout.module.css'

type AppProps = {
    pageTitle: string;
    children : any;
  };
const Layout = ({ pageTitle, children }: AppProps) => {
  return (
    <div className={container}>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
          <li className={navLinkItem}><Link to="/about" className={navLinkText}>About</Link></li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout

//https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forms_and_events
//https://www.gatsbyjs.com/docs/tutorial/getting-started/part-3/