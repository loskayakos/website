import React, { useEffect } from 'react'
import Page from '../layout/Page'
import { Section, PageTitle, Wrapper } from '../componets/shared/Index.styled'
import ContactForm from './../componets/shared/ContactForm'
import { Boat } from '../componets/icons/Boat.icon'
import ContactFormFormspree from '../componets/shared/ContactFormFormspree'

export default function Rezervation() {
  return (
    <Page>
      <Section tabletPadding='0 0 64px' mobile='0 20px 32px'>
        <Boat />
        <Wrapper paddingTablet='96px 0 24px' mobile='64px 0 24px;'>
          <PageTitle style={{ textAlign: 'center' }}>Rezerwacja</PageTitle>
        </Wrapper>

        {/* <ContactForm /> */}
        <ContactFormFormspree />
      </Section>
    </Page>
  )
}
