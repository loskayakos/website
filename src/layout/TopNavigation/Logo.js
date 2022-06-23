import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import variables from '../../styles/variables'
import { Wrapper } from '../../componets/shared/Index.styled'
import styled from 'styled-components'

const LogoWrapper = styled(Wrapper)`
  z-index: 5;
  & .logo-img {
    height: 83px;
    width: 94px;
    & img {
      max-height: 83px;
      max-width: 94px;
    }
  }
  @media ${variables.device.tabletXL} {
    width: 200px;
    display: flex;
    align-items: center;
    & .logo-img {
      width: 100%;
      height: auto;
      & img {
        max-height: 100%;
        max-width: 100%;
      }
    }
  }
`

export const Logo = () => {
  return (
    <LogoWrapper>
      <Link to='/'>
        <StaticImage alt={'Los Kayakos logo'} src='../../../static/images/Logo.png' className='logo-img' />
      </Link>
    </LogoWrapper>
  )
}
