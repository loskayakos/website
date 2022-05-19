import React from 'react'

import styled from 'styled-components'
import variables from '../../styles/variables'

const Hamburger = styled.a`
  position: relative;

  width: 48px;
  height: 48px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 5;
  & span {
    display: block;
    left: calc(50% - 14px);
    position: absolute;
    width: 28px;
    height: 0.1rem;
    background: #212121;
    border-radius: 5px;
    transform-origin: 1px;
    position: relative;
    transform-origin: center;
    transition-duration: 86ms;
    transition-property: background-color, opacity, transform;
    transition-timing-function: ease-out;
    :first-child {
      top: calc(50% - 6px);
      transform: ${({ opened }) => (opened ? 'rotate(45deg) translateY(10px) ' : 'rotate(0) translateY(0)')};
    }
    :nth-child(2) {
      top: calc(50% - 1px);
      opacity: ${({ opened }) => (opened ? '0' : '1')};
      transform: ${({ opened }) => (opened ? 'translateX(20px)' : 'translateX(0)')};
    }
    :nth-child(3) {
      top: calc(50% + 4px);
      transform: ${({ opened }) => (opened ? 'rotate(-45deg) translateY(-10px)   ' : 'rotate(0) translateY(0)')};
    }
  }

  @media ${variables.device.tabletXL} {
    display: none;
  }
`

const Burger = ({ opened, toggle }) => {
  return (
    <Hamburger
      role='button'
      className={opened ? 'is-active' : ''}
      aria-label='menu'
      aria-expanded='false'
      data-target='#topNavBar'
      opened={opened}
      onClick={toggle}
    >
      <span aria-hidden='true' />
      <span aria-hidden='true' />
      <span aria-hidden='true' />
    </Hamburger>
  )
}
export default Burger
