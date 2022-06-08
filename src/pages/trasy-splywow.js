import * as React from 'react'
import { Section, Wrapper } from '../componets/shared/Index.styled'
import Page from '../layout/Page'

export default function RaftingRoutes() {
  return (
    <Page>
      <Section>
        <Wrapper>
          <iframe
            src='https://www.google.com/maps/d/u/0/edit?mid=15mib4kgRZbPtrh56-BzcXKjsaZ1sLq8T&ll=50.73671901396358%2C20.391910849999995&z=12'
            width='600'
            height='450'
            frameBorder='0'
            allowFullScreen=''
            aria-hidden='false'
            tabIndex='0'
          />
        </Wrapper>
      </Section>
    </Page>
  )
}
