import React from 'react'
import styled from 'styled-components'

const Svg = styled.svg`
  margin: 0 11px 0 0;
  ${({ isRight }) => isRight && 'transform: rotate(180deg); margin: 0 0 0 11px'};
`

export function SliderArrow({ isRight }) {
  return (
    <Svg width='23' height='20' viewBox='0 0 23 20' fill='none' xmlns='http://www.w3.org/2000/svg' isRight={isRight}>
      <path
        d='M9.29841 0.288685C9.69126 -0.0995013 10.3244 -0.0957215 10.7126 0.297127C11.1008 0.689976 11.097 1.32313 10.7042 1.71132L3.32792 9H21.0032C21.5555 9 22.0032 9.44771 22.0032 10C22.0032 10.5523 21.5555 11 21.0032 11H3.3302L10.7042 18.2864C11.097 18.6746 11.1008 19.3078 10.7126 19.7006C10.3244 20.0935 9.69126 20.0972 9.29841 19.7091L0.371409 10.888C-0.123804 10.3987 -0.123802 9.59906 0.371409 9.10973L9.29841 0.288685Z'
        fill='#2764AB'
      />
    </Svg>
  )
}
