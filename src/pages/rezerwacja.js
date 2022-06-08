import React from 'react'
import Page from '../layout/Page'
import styled from 'styled-components'
import { Section } from '../componets/shared/Index.styled'
import variables from '../styles/variables'

const BookeroSection = styled(Section)`
  && .bookero-plugin-header {
    background: ${variables.color.headerButton};
  }
  && .submit-section .submit-button[data-v-78854db5] {
    background: ${variables.color.headerButton};
    width: 100%;
    height: 51px;
    font-family: Manrope;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 150%;
    background: rgb(82, 120, 44);
    border-radius: 24px;
    border: 2px solid transparent;
    color: rgb(248, 249, 250);
    transition: transform 0.5s cubic-bezier(0.345, 0.24, 0.07, 1) 0s;
  }
  && .submit-section .submit-button[data-v-78854db5]:active,
  .submit-section .submit-button[data-v-78854db5]:focus,
  .submit-section .submit-button[data-v-78854db5] {
    &:hover {
      background: rgb(255, 255, 255);
      color: rgb(82, 120, 44);
      border: 2px solid rgb(82, 120, 44);
    }
  }
`
export default function Rezervation() {
  return (
    <Page>
      <BookeroSection>
        <div id='bookero'></div>
      </BookeroSection>
    </Page>
  )
}
