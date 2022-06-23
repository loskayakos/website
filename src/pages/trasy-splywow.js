import * as React from 'react'
import DownflowText from '../componets/downflow/DownflowText'
import { Section, SectionTitle, TextRegular, Wrapper, Content } from '../componets/shared/Index.styled'
import Page from '../layout/Page'
import { Flex } from './../componets/shared/Index.styled'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import { Button } from '../componets/shared/Button'
import { Sun } from './../componets/icons/Sun.icon'
import { Bird } from './../componets/icons/Bird.icon'

const RouteWrapper = styled.div`
  box-shadow: -34px 105px 44px rgba(162, 160, 160, 0.01), -19px 59px 37px rgba(162, 160, 160, 0.05),
    -8px 26px 28px rgba(162, 160, 160, 0.09), -2px 7px 15px rgba(162, 160, 160, 0.1),
    0px 0px 0px rgba(162, 160, 160, 0.1);
  border-radius: 16px;
  padding: 30px 24px;
  @media ${variables.device.tabletXL} {
    padding: 60px 48px;
  }
`
const BoldText = styled.span`
  font-weight: 700;
`

const ContentWrapper = styled.div`
  padding: 24px 0px;
`

export default function RaftingRoutes() {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: { frontmatter: { layout: { eq: "downflow-routes" } } }) {
        edges {
          node {
            frontmatter {
              title
              description_length_route
              length_route
              description_trip_time
              trip_time
              description_difficulty_level
              difficulty_level
              description_recommended
              recommended
              map
            }
            html
          }
        }
      }
    }
  `)

  const { allMarkdownRemark } = data
  const { edges } = allMarkdownRemark
  return (
    <Page>
      <DownflowText />
      <Section tabletPadding='97px 160px 80px' mobile='60px 20px'>
        {edges.map((route, index) => {
          console.log('frontmatter')
          console.log(route)

          const {
            title,
            description_length_route,
            length_route,
            description_trip_time,
            trip_time,
            description_difficulty_level,
            difficulty_level,
            description_recommended,
            recommended,
            map,
          } = route.node.frontmatter
          const { html } = route.node
          return (
            <Wrapper paddingTablet='0px 0px 48px 0px' mobile='0px 0px 24px 0px'>
              {index == 1 && <Sun />}
              {index == 2 && <Bird isOffer={true} />}
              <RouteWrapper>
                <Flex direction='column' tabletDirection='row'>
                  <Wrapper widthTablet='100%'>
                    <iframe src={map} width='100%' height='480'></iframe>
                  </Wrapper>
                  <Wrapper paddingTablet='0px 0px 0px 48px' mobile='24px 0px 0px 0px'>
                    <Flex direction='column' tabletContent='space-between' height='100%'>
                      <SectionTitle>{title}</SectionTitle>
                      <TextRegular>
                        {description_length_route} <BoldText>{length_route}</BoldText>
                      </TextRegular>{' '}
                      <TextRegular>
                        {description_trip_time} <BoldText>{trip_time}</BoldText>
                      </TextRegular>{' '}
                      <TextRegular>
                        {description_difficulty_level} <BoldText>{difficulty_level}</BoldText>
                      </TextRegular>
                      <TextRegular>
                        {description_recommended} <BoldText>{recommended}</BoldText>
                      </TextRegular>
                      <ContentWrapper>
                        <Content dangerouslySetInnerHTML={{ __html: html }} textAlign='left' />
                      </ContentWrapper>
                      <Button name='Rezerwuj' color={true} />
                    </Flex>
                  </Wrapper>
                </Flex>
              </RouteWrapper>
            </Wrapper>
          )
        })}

        {/* <Wrapper paddingTablet='0px 0px 48px 0px' mobile='0px 0px 24px 0px'>
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
        </Wrapper> */}
      </Section>
    </Page>
  )
}
