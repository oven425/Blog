"use strict";(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[643],{1626:function(e,t,a){a.d(t,{Z:function(){return r}});var l=a(7294),n=a(1883),s="layout-module--nav-link-item--a5f0a",c="layout-module--nav-link-text--69cda";var r=e=>{let{pageTitle:t,children:a}=e;const r=(0,n.useStaticQuery)("3159585216");return l.createElement("div",{className:"layout-module--container--78b04"},l.createElement("header",{className:"layout-module--site-title--e4dea"},r.site.siteMetadata.title),l.createElement("nav",null,l.createElement("ul",{className:"layout-module--nav-links--1113b"},l.createElement("li",{className:s},l.createElement(n.Link,{to:"/",className:c},"Home")),l.createElement("li",{className:s},l.createElement(n.Link,{to:"/about",className:c},"About")),l.createElement("li",{className:s},l.createElement(n.Link,{to:"/blog",className:c},"Blog")))),l.createElement("main",null,l.createElement("h1",{className:"layout-module--heading--f158c"},t),a))}},4001:function(e,t,a){var l=a(7294),n=a(1883);t.Z=e=>{let{title:t}=e;const a=(0,n.useStaticQuery)("3159585216");return l.createElement("title",null,t," | ",a.site.siteMetadata.title)}},8133:function(e,t,a){a.r(t),a.d(t,{Head:function(){return r}});var l=a(7294),n=a(1883),s=a(1626),c=a(4001);const r=()=>l.createElement(c.Z,{title:"My Blog Posts"});t.default=e=>{let{data:t}=e;return console.log(t.allMdx.nodes),l.createElement(s.Z,{pageTitle:"My Blog Posts"},t.allMdx.nodes.map((e=>l.createElement("article",{key:e.id},l.createElement("h2",null,l.createElement(n.Link,{to:"/blog/"+e.frontmatter.slug},e.frontmatter.title)),l.createElement("p",null,"Posted: ",e.frontmatter.date)))))}}}]);
//# sourceMappingURL=component---src-pages-blog-index-tsx-7a01861fc86ef0fe8bcf.js.map