import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

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

export const Button = ({ link, name, color, isNoColor, isOffer }) => {
  return (
    <SharedButton color={color} isNoColor={isNoColor} isOffer={isOffer}>
      <Link className='btn' to={link}>
        {name}
      </Link>
    </SharedButton>
  )
}
