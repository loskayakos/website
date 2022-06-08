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
