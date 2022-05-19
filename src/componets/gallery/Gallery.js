import React from 'react'
import SwiperCarousel from '../shared/SwiperCarousel'
import { useStaticQuery, graphql } from 'gatsby'
import GalleryText from './GalleryText'
import { Flex, PageSection } from '../shared/Index.styled'
import GallerySlider from './GallerySlider'
import { Section } from './../shared/Index.styled'

const Gallery = () => {
  return (
    <>
      <PageSection>
        <Section tabletPadding='80px 0 150px' mobile='66px 0 100px'>
          <Flex
            tabletGap='82'
            tabletItems='center'
            direction='column'
            tabletDirection='row'
            tabletContent='space-between'
          >
            <GalleryText />
            <SwiperCarousel sliders={useStaticQuery(GSQ)} isOnlyImage={true} className='gallery-img' />
          </Flex>
        </Section>
        <Section tabletPadding='0 0 94px' mobile='0 0 49px'>
          <GallerySlider sliders={useStaticQuery(GSQ)} isOnlyImage={true} className='gallery-img' />
        </Section>
      </PageSection>
    </>
  )
}

const GSQ = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { layout: { eq: "gallery-slider" } } }) {
      edges {
        node {
          frontmatter {
            hero_slider_alt
            hero_slider {
              childImageSharp {
                gatsbyImageData(placeholder: DOMINANT_COLOR, layout: CONSTRAINED, width: 600, quality: 100)
              }
            }
          }
        }
      }
    }
  }
`

export default Gallery
