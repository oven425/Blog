import * as React from 'react'
import { Link } from 'gatsby'
type AppProps = {
    pageTitle: string;
    children : any;
  };
const Layout = ({ pageTitle, children }: AppProps) => {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout

//https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forms_and_events
//https://www.gatsbyjs.com/docs/tutorial/getting-started/part-3/