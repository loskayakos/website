import React from 'react'
import styled from 'styled-components'

import { TopMenu } from '../TopNavigation'
import { Flex, InternalLink } from '../../componets/shared/Index.styled'
import variables from '../../styles/variables'
import { Button } from '../../componets/shared/Button'
import { useWindowSize } from '../../componets/utils/use-windowsize'

const Span = styled.span`
  text-decoration: none;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
`
const TopNavBar = styled(Flex)`
  display: flex;
  gap: 47px;
  overflow: auto;
  flex-direction: column;
  text-align: center;
  position: fixed;
  background-color: #fff;
  top: 89px;
  left: 0;
  right: 0;
  bottom: 0;
  transition: transform 0.5s ease-in;
  transform: translateY(-100%);
  z-index: 1;
  margin-left: 0;
  padding: 20px;
  @media ${variables.device.tabletXL} {
    flex-direction: row;
    transform: translateY(0);
    position: unset;
    padding: 0;
  }
`

export const List = ({ opened, currentPath }) => {
  const isCurrent = link => {
    return currentPath && currentPath.includes(link.split('/')[1])
  }

  const { width } = useWindowSize()
  const breakpoint = 992

  return (
    <TopNavBar
      id='topNavBar'
      tabletGap='49'
      className={opened ? 'is-active' : ''}
      direction='column'
      tabletDirection='row'
    >
      {TopMenu.map(menuElement => {
        let link = menuElement.link

        return (
          <>
            <InternalLink key={link} to={link} isCurrent={isCurrent(link)}>
              <Span>{menuElement.title}</Span>
            </InternalLink>
          </>
        )
      })}
      {width < breakpoint && (
        <Flex content='center'>
          <Button name='Rezerwuj' />
        </Flex>
      )}
    </TopNavBar>
  )
}
