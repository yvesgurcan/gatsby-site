/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { createGlobalStyle, ThemeProvider } from "styled-components"

import Nav from "./Nav"
import Footer from "./Footer"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          themes {
            mediumBreakpoint
          }
        }
      }
    }
  `)

  console.log(data.site.siteMetadata.themes[0])

  return (
    <ThemeProvider theme={data.site.siteMetadata.themes[0]}>
      <GlobalStyle />
      <Nav siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Montserrat", sans-serif;
  }

  a {
    text-decoration: none;
  }
`

export default Layout
