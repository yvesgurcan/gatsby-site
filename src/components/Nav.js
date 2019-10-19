import { Link, useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import Container from "./Container"
import Title from "./Title"

const Nav = () => {
  const data = useStaticQuery(graphql`
    query SiteQuery {
      site {
        siteMetadata {
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)

  return (
    <NavContainer>
      <NavHeader>
        <Link to="/">
          <Title />
        </Link>
      </NavHeader>
      <LargeScreenMenu>
        {data.site.siteMetadata.menuLinks.map(({ name, link }) => (
          <LargeScreenMenuItem key={link} to={link}>
            {name}
          </LargeScreenMenuItem>
        ))}
      </LargeScreenMenu>
    </NavContainer>
  )
}

Nav.propTypes = {
  siteTitle: PropTypes.string,
}

Nav.defaultProps = {
  siteTitle: ``,
}

const NavHeader = styled.h1`
  font-size: 20px;
`

const NavContainer = styled(Container)`
  justify-content: space-between;
`

const LargeScreenMenu = styled.div`
  display: flex;
  font-size: 15px;
  font-weight: bold;
  text-transform: uppercase;

  @media only screen and (max-width: ${props => props.theme.mediumBreakpoint}) {
    display: none;
  }
`

const LargeScreenMenuItem = styled(Link)`
  margin-right: 20px;
`

export default Nav
