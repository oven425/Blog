import hljs from 'highlight.js';
//import hljs from 'highlightjs-line-numbers.js'
import './hightlight.css'
import * as React from "react"
import { graphql } from "gatsby"

const MarkdownPage=(data)=>{
  React.useEffect(()=>{
    hljs.highlightAll();
  },[])
    //console.log(data);
    return(
        <div>
            <div dangerouslySetInnerHTML={{__html:data.data.markdownRemark.html}}>
                
            </div>
            {/* <div>{JSON.stringify(data.data.markdownRemark)}</div> */}
        </div>
    )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`



export default MarkdownPage;