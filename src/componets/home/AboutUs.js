import React from 'react'
import { Section, SectionTitle, Flex, Content, SubSectionTitle, Wrapper } from '../shared/Index.styled'
import { useStaticQuery, graphql } from 'gatsby'
import { Equipment } from './../icons/Equipment.icon'
import { NounCash } from './../icons/NounCash.icon'
import { Safety } from './../icons/Safety.icon'
import { Satisfaction } from './../icons/Satisfaction.icon'

const AboutUs = () => {
  const data = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { layout: { eq: "aboutUs" } }) {
        frontmatter {
          title
          title_graphic_1
          title_graphic_2
          title_graphic_3
          title_graphic_4
        }
        html
      }
    }
  `)

  const { markdownRemark } = data
  const { frontmatter: page, html } = markdownRemark
  return (
    <Section background='#272B30' tabletPadding='97px 160px 80px' mobile='60px 20px'>
      <Flex direction='column' tabletDirection='row' tabletContent='space-between' tabletItems='center'>
        <Flex direction='column' tabletBasis='70%'>
          <Wrapper mobile='0 0 16px' paddingTablet='0 0 24px'>
            <SectionTitle color='#ffffff'>{page.title}</SectionTitle>
          </Wrapper>
          <Wrapper mobile='0 0 48px'>
            <Content isColor={true} dangerouslySetInnerHTML={{ __html: html }} />
          </Wrapper>
        </Flex>

        <Flex wrap='wrap' gap='35'>
          <Flex direction='column' basis='calc(100% / 2 - (35px - 35px / 2))' content='center' items='center' gap='20'>
            <NounCash />
            <SubSectionTitle isWhiteColor={true}>{page.title_graphic_1}</SubSectionTitle>
          </Flex>

          <Flex direction='column' basis='calc(100% / 2 - (35px - 35px / 2))' content='center' items='center' gap='20'>
            <Safety />
            <SubSectionTitle isWhiteColor={true}>{page.title_graphic_2}</SubSectionTitle>
          </Flex>

          <Flex direction='column' basis='calc(100% / 2 - (35px - 35px / 2))' content='center' items='center' gap='20'>
            <Satisfaction />
            <SubSectionTitle isWhiteColor={true}>{page.title_graphic_3}</SubSectionTitle>
          </Flex>

          <Flex direction='column' basis='calc(100% / 2 - (35px - 35px / 2))' content='center' items='center' gap='20'>
            <Equipment />
            <SubSectionTitle isWhiteColor={true}>{page.title_graphic_4}</SubSectionTitle>
          </Flex>
        </Flex>
      </Flex>
    </Section>
  )
}

export default AboutUs
