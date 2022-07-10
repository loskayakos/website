import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { Flex, Section, SectionTitle, SubSectionTitle, TextRegular, Wrapper, Figure } from './../shared/Index.styled'
import { Boat } from '../icons/Boat.icon'
import { NounArrow } from '../icons/NounArrow.icon'
import { Bird } from '../icons/Bird.icon'
import { useWindowSize } from './../utils/use-windowsize'
import variables from '../../styles/variables'

const NumberWork = styled.span`
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 56px;
  display: flex;
  align-items: flex-end;

  /* Red bright */

  color: #dc1825;

  opacity: 0.5;
  @media ${variables.device.tabletXL} {
    font-size: 144px;
    line-height: 169px;
  }
`
const SectionWork = styled(Section)`
  background: rgba(253, 254, 255, 0.9);
  /* Shadow */

  box-shadow: -20px -35px 50px rgba(21, 44, 91, 0.03), 0px 75px 80px rgba(21, 44, 91, 0.03),
    0px 31.3332px 33.4221px rgba(21, 44, 91, 0.0215656), 0px 16.7522px 17.869px rgba(21, 44, 91, 0.0178832),
    0px 9.39116px 10.0172px rgba(21, 44, 91, 0.015), 0px 4.98758px 5.32008px rgba(21, 44, 91, 0.0121168),
    0px 2.07544px 2.21381px rgba(21, 44, 91, 0.00843437);
  border-radius: 62px;
`

const HowWeDoWork = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: { frontmatter: { layout: { eq: "work" } } }, sort: { fields: frontmatter___order }) {
        edges {
          node {
            frontmatter {
              work_picture {
                childImageSharp {
                  gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR, quality: 90)
                }
              }
              order
              short_description
              title
              work_picture_alt
            }
          }
        }
      }
    }
  `)

  const { allMarkdownRemark } = data
  const { edges } = allMarkdownRemark
  const { width } = useWindowSize()
  const breakpoint = 992

  return (
    <Section mobile='0 20px ' tabletPadding='0 5.5%'>
      <Boat isRiverTop={true} />
      <SectionWork mobile='0 20px 48px' tabletPadding='103px 133px '>
        <Wrapper mobile='48px 0 16px' paddingTablet='0 0 18px '>
          <SectionTitle style={{ textAlign: 'center' }}>Jak działamy?</SectionTitle>
        </Wrapper>
        {edges.map(({ node }, index) => {
          const { frontmatter: page } = node
          const image = getImage(page.work_picture)

          return (
            <>
              {width < breakpoint && typeof window !== 'undefined' ? (
                <Wrapper key={index} mobile='0 0 40px'>
                  <Flex items='flex-start' gap='9'>
                    <NumberWork>{page.order}</NumberWork>
                    <Wrapper mobile='0 0 32px'>
                      <Flex direction='column'>
                        <SubSectionTitle style={{ marginTop: '18px' }}>{page.title}</SubSectionTitle>
                        <TextRegular>{page.short_description}</TextRegular>
                      </Flex>
                    </Wrapper>
                  </Flex>
                  <Figure>
                    <GatsbyImage image={image} alt={page.work_picture_alt} className='work-img' />
                  </Figure>
                </Wrapper>
              ) : (
                <Wrapper key={index} paddingTablet='0  40px'>
                  <Flex
                    tabletDirection={index % 2 ? '' : 'row-reverse'}
                    tabletContent='space-between'
                    tabletItems='center'
                  >
                    <Figure>
                      <GatsbyImage image={image} alt={page.work_picture_alt} className='work-img' />
                    </Figure>
                    <Flex items='flex-start' tabletGap='52' tabletBasis='50%'>
                      <NumberWork>{page.order}</NumberWork>
                      <Wrapper mobile='0 0 32px'>
                        <Flex direction='column'>
                          <SubSectionTitle style={{ marginTop: '42px' }}>{page.title}</SubSectionTitle>
                          <TextRegular>{page.short_description}</TextRegular>
                        </Flex>
                      </Wrapper>
                    </Flex>
                  </Flex>
                </Wrapper>
              )}

              {/* {index % 2 && index < edges.length - 1 ? (
                <NounArrow isArrowDownLeft={true} />
              ) : index == edges.length - 1 ? (
                ''
              ) : (
                <NounArrow isArrowDownRight={true} />
              )} */}
            </>
          )
        })}
      </SectionWork>
      <Boat isRiverTop={true} />
      <Bird isHomePage={true} />
    </Section>
  )
}

export default HowWeDoWork
