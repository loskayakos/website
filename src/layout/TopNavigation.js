import React, { useEffect, useState } from 'react'

import { Logo } from './TopNavigation/Logo'
import Burger from './TopNavigation/Burger'
import { List } from './TopNavigation/List'
import { routeLinks } from '../config/routing'
import { Flex, Section } from '../componets/shared/Index.styled'
import { Button } from './../componets/shared/Button'
import styled from 'styled-components'
import variables from '../styles/variables'
import { useWindowSize } from './../componets/utils/use-windowsize'
import CustomModal from '../componets/shared/Modal'

const Nav = styled.nav`
  background: #f8f9fa;
  box-shadow: 0px 4px 4px #dee2e6;
  position: fixed;
  width: 100%;
  height: 90px;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 30;

  @media ${variables.device.tabletXL} {
    height: 160px;
  }
`

export const TopMenu = [
  { link: routeLinks.offer(), title: 'Oferta' },
  { link: routeLinks.raftingRoutes, title: 'Trasy Spływów' },
  { link: routeLinks.gallery, title: 'Galeria' },
  { link: routeLinks.contact, title: 'Kontakt' },
]

const TopNavigation = ({ path, toggled }) => {
  const [menuOpened, setMenuOpened] = useState(false)
  const { width } = useWindowSize()
  const breakpoint = 992

  const toggleMenu = () => {
    const newValue = !menuOpened
    setMenuOpened(newValue)
    toggled(newValue)
  }
  return (
    <Nav role='navigation' aria-label='main navigation'>
      <Section tabletPadding='14.5px 5.5%' mobile='3.5px 20px'>
        <Flex
          tabletItems='center'
          tabletContent='space-between'
          tabletFlex='1 1 40% '
          items='center'
          content='space-between'
        >
          <Logo />

          <List opened={menuOpened} elements={TopMenu} currentPath={path || ''} />

          {width > breakpoint && <CustomModal />}
          <Burger opened={menuOpened} toggle={toggleMenu} />
        </Flex>
      </Section>
    </Nav>
  )
}

export default TopNavigation
