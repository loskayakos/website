import * as React from 'react'
import { Section, SectionTitle, TextRegular, Wrapper } from '../componets/shared/Index.styled'
import Page from '../layout/Page'
import { Flex } from './../componets/shared/Index.styled'

export default function RaftingRoutes() {
  return (
    <Page>
      <Section tabletPadding='97px 160px 80px' mobile='60px 20px'>
        <Wrapper paddingTablet='0px 0px 48px 0px' mobile='0px 0px 24px 0px'>
          <Flex direction='column' tabletDirection='row'>
            <Wrapper widthTablet='50%'>
              <iframe
                src='https://www.google.com/maps/d/u/0/embed?mid=15mib4kgRZbPtrh56-BzcXKjsaZ1sLq8T&ehbc=2E312F'
                width='100%'
                height='480'
              ></iframe>
            </Wrapper>
            <Wrapper paddingTablet='0px 0px 0px 48px' mobile='24px 0px 0px 0px'>
              <SectionTitle>Żerniki – Mokrsko Dolne </SectionTitle>
              <TextRegular>Długość trasy: 11 km </TextRegular> <TextRegular>Czas spływu: około 5 godzin</TextRegular>
              <TextRegular>Stopień trudności trasy: bardzo łatwa</TextRegular>
              <TextRegular>Czy polecana dla rodzin z dziećmi : tak</TextRegular>
            </Wrapper>
          </Flex>
        </Wrapper>
        <Wrapper paddingTablet='0px 0px 48px 0px' mobile='0px 0px 24px 0px'>
          <Flex direction='column' tabletDirection='row'>
            <Wrapper widthTablet='50%'>
              <iframe
                src='https://www.google.com/maps/d/u/0/embed?mid=1yoiSKQAojq4Gm3KxyrsW7iEcqq-tbsrF&ehbc=2E312F'
                width='100%'
                height='480'
              ></iframe>
            </Wrapper>
            <Wrapper paddingTablet='0px 0px 0px 48px' mobile='24px 0px 0px 0px'>
              <SectionTitle>Tokarnia – Mokrsko Dolne </SectionTitle>
              <TextRegular>Długość trasy: 15 km </TextRegular> <TextRegular>Czas spływu: około 5 godzin</TextRegular>
              <TextRegular>Stopień trudności trasy: łatwa</TextRegular>
              <TextRegular>Czy polecana dla rodzin z dziećmi : tak</TextRegular>
            </Wrapper>
          </Flex>
        </Wrapper>
        <Wrapper paddingTablet='0px 0px 48px 0px' mobile='0px 0px 24px 0px'>
          <Flex direction='column' tabletDirection='row'>
            <Wrapper widthTablet='50%'>
              <iframe
                src='https://www.google.com/maps/d/u/0/embed?mid=1-5HqoLXcejb-KelrjzVazMgs9LL95xbF&ehbc=2E312F'
                width='100%'
                height='480'
              ></iframe>
            </Wrapper>
            <Wrapper paddingTablet='0px 0px 0px 48px' mobile='24px 0px 0px 0px'>
              <SectionTitle>Żerniki – Mokrsko Dolne </SectionTitle>
              <TextRegular>Długość trasy: 11 km </TextRegular> <TextRegular>Czas spływu: około 5 godzin</TextRegular>
              <TextRegular>Stopień trudności trasy: bardzo łatwa</TextRegular>
              <TextRegular>Czy polecana dla rodzin z dziećmi : tak</TextRegular>
            </Wrapper>
          </Flex>
        </Wrapper>
      </Section>
    </Page>
  )
}
