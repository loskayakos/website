import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { InternalHref } from './Index.styled'

const SharedButton = styled.button`
  width: 194px;
  height: 51px;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 150%;
  background: #52782c;
  border-radius: 24px;
  border: 2px solid transparent;
  color: #f8f9fa;
  transition: transform 0.5s cubic-bezier(0.345, 0.24, 0.07, 1);
  cursor: pointer;
  z-index: 1;

  &:hover {
    background: #ffffff;
    color: #52782c;
    border: 2px solid #52782c;
  }
  ${({ color }) =>
    color &&
    `background: #ffffff; color: #52782C; border: 2px solid #52782C;&:hover {
      color: #f8f9fa;border: 2px solid transparent;background: #52782c;
  }  `};
  ${({ isNoColor }) =>
    isNoColor &&
    `background: #ffffff;
    color: #000000;
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 150%;
    border: none;
    border-radius: 0;
    width: fit-content`};
  ${({ isOffer }) => isOffer && `display: block; margin: 0 auto;`}
`

export const Button = ({ color, isNoColor, isOffer }) => {
  return (
    <SharedButton color={color} isNoColor={isNoColor} isOffer={isOffer}>
      <InternalHref className='btn' href={'/rezerwacja'} isButton={true}>
        Rezerwuj
      </InternalHref>
    </SharedButton>
  )
}
