import React from "react"
import styled from "styled-components"

import Title from "./Title"
import Container from "./Container"

const Footer = () => (
  <FooterContainer>
    <Title />
  </FooterContainer>
)

const FooterContainer = styled(Container)`
  justify-content: center;
`

export default Footer
