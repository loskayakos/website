import React, { useEffect } from 'react'
import Page from '../layout/Page'
import styled from 'styled-components'
import { Section } from '../componets/shared/Index.styled'
import variables from '../styles/variables'
import ContactForm from '../componets/shared/ContactForm'

const BookeroSection = styled(Section)`
  display: flex;
  flex-direction: column;
  padding: 400px;
`
export default function Rezervation() {
  return (
    <Page>
      <BookeroSection>{/* <ContactForm /> */}</BookeroSection>
    </Page>
  )
}
