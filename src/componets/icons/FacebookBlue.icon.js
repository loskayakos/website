import React from 'react'
import styled from 'styled-components'
import variables from '../../styles/variables'

const Svg = styled.svg`
  background-color: #0000;
  width: 20px;
  height: 40px;

  @media ${variables.device.tabletXL} {
    width: 13px;
    height: 26px;
  }
`
export function FacebookBlue() {
  return (
    <Svg width='14' height='26' viewBox='0 0 14 26' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M10.8306 4.31708H13.2042V0.183076C12.7947 0.126742 11.3864 -7.62939e-06 9.74621 -7.62939e-06C6.32396 -7.62939e-06 3.97963 2.15258 3.97963 6.10891V9.74999H0.203125V14.3715H3.97963V26H8.60979V14.3726H12.2335L12.8088 9.75108H8.60871V6.56716C8.60979 5.23141 8.96946 4.31708 10.8306 4.31708Z'
        fill='#2764AB'
      />
    </Svg>
  )
}
