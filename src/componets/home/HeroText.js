import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Content, PageTitle, Wrapper, Flex } from '../shared/Index.styled'
import { Boat } from '../icons/Boat.icon'
import styled from 'styled-components'
import variables from '../../styles/variables'
import { Button } from '../shared/Button'
import { NounArrow } from './../icons/NounArrow.icon'

const Intro = styled.div`
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 600;
  font-size: ${variables.pxToRem(12)};
  line-height: ${variables.pxToRem(20)};
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${variables.color.primary};
  padding-top: ${variables.pxToRem(16)};
`

const HeroText = () => {
  const data = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { layout: { eq: "about-us" } }) {
        frontmatter {
          title
        }
        html
      }
    }
  `)
  const { markdownRemark } = data
  const { frontmatter: page, html } = markdownRemark

  return (
    <Wrapper mobile='0 20px 100px 20px' paddingTablet='172px 20px 0 5.5%'>
      <Boat isHeader={true} />
      <Intro>{page.title}</Intro>
      <Wrapper mobile='8px 0 16px' paddingTablet='8px 0 24px'>
        <PageTitle>
          <p>Spędź z nami</p>
          <p>
            <span>niezapomnianą</span> przygodę!
          </p>
        </PageTitle>
      </Wrapper>
      <Wrapper paddingTablet='0 0 16px' mobile='0 0 8px'>
        <Content dangerouslySetInnerHTML={{ __html: html }} />
      </Wrapper>
      <Wrapper>
        <Flex>
          <Button color={true} name='Rezerwuj' />
          <NounArrow isArrowTopLeft={true} />
        </Flex>
      </Wrapper>
    </Wrapper>
  )
}

export default HeroText
