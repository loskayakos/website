import React, { useEffect } from 'react'
import Page from '../layout/Page'
import { Section } from '../componets/shared/Index.styled'
import ContactForm from './../componets/shared/ContactForm'

export default function Rezervation() {
  return (
    <Page>
      <Section tabletPadding='160px 0 64px' mobile='90px 20px 32px'>
        <ContactForm />
      </Section>
    </Page>
  )
}
