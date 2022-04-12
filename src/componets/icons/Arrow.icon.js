import React from 'react'
import styled from 'styled-components'
import variables from '../../styles/variables'

const Svg = styled.svg`
  transform: rotate(270deg);
`
export function Arrow() {
  return (
    
    <Svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.7048 0.288685C12.312 -0.0995013 11.6788 -0.0957215 11.2906 0.297127C10.9025 0.689976 10.9062 1.32313 11.2991 1.71132L18.6753 9H1C0.447715 9 0 9.44771 0 10C0 10.5523 0.447716 11 1 11H18.673L11.2991 18.2864C10.9062 18.6746 10.9025 19.3078 11.2906 19.7006C11.6788 20.0935 12.312 20.0972 12.7048 19.7091L21.6318 10.888C22.127 10.3987 22.127 9.59906 21.6318 9.10973L12.7048 0.288685Z" fill="#2764AB"/>
    </Svg>
  )
}
