import { Link} from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from 'styled-components';

import Container from './Container';
import Title from './Title';

const Nav = () => (
  <NavContainer>
      <NavHeader>
        <Link
          to="/"
        >
          <Title />
        </Link>
      </NavHeader>
  </NavContainer>
);
  
Nav.propTypes = {
  siteTitle: PropTypes.string,
}

Nav.defaultProps = {
  siteTitle: ``,
}

const NavHeader = styled.h1`
  font-size: 20px;
  margin: 0;
`;

const NavContainer = styled(Container)`
  justify-content: space-between;
`;

export default Nav;