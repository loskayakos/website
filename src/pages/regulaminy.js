import React, { useEffect } from 'react'
import Page from '../layout/Page'
import styled from 'styled-components'
import { Flex, Section } from '../componets/shared/Index.styled'

const DownloadLink = styled.a`
  text-decoration: underline;
  transition: transform 0.5s cubic-bezier(0.345, 0.24, 0.07, 1);
  &:hover {
    color: #52782c;
    text-decoration: none;
  }
`

export default function Statute() {
  return (
    <Page>
      <Section mobile='90px 20px 32px' tabletPadding='160px 5.5% 64px'>
        <Flex direction='column' gap='48'>
          <h1>Regulaminy</h1>
          <div>
            <DownloadLink href={'/Regulamin-kajaków.pdf'} download>
              Regulamin kajaków
            </DownloadLink>
          </div>
          <div>
            <DownloadLink href={`/Regulamin-pola-namiotowego.pdf`} download>
              Regulamin pola namiotowego
            </DownloadLink>
          </div>
        </Flex>
      </Section>
    </Page>
  )
}
