import React, { useState } from 'react'
import { GlobalStyle } from '../styles/globalstyle'
import Footer from './Footer'
import TopNavigation from './TopNavigation'
import styled from 'styled-components'
import variables from '../styles/variables'
import { useLocation } from '@reach/router'

const LayoutContainer = styled.div`
  padding-top: 90px;
  @media ${variables.device.tabletXL} {
    padding-top: 160px;
  }
`
const Wrapper = styled.div`
  ${({ isMobileMenuOpened }) =>
    isMobileMenuOpened &&
    `overflow: hidden;
  max-height: calc(100vh - 90px)`}
`

const Page = ({ children }) => {
  const [mobileMenuOpened, setMobileMenuOpened] = useState(false)

  const { pathname } = useLocation()
  return (
    <Wrapper isMobileMenuOpened={mobileMenuOpened}>
      <TopNavigation path={pathname} toggled={setMobileMenuOpened} />
      <GlobalStyle />
      <LayoutContainer>{children}</LayoutContainer>

      <Footer />
    </Wrapper>
  )
}

export default Page
