import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Wrapper } from '../shared/Index.styled'
import { Section } from './../shared/Index.styled'
import Gallery from '@browniebroke/gatsby-image-gallery'
import styled from 'styled-components'

const GalleryWrapper = styled(Wrapper)``

const GalleryMobile = () => {
  const lightboxOptions = {
    imageLoadErrorMessage: 'Impossible de charger cette image',
    nextLabel: 'Image suivante',
    prevLabel: 'Image précédente',
    zoomInLabel: 'Zoomer',
    zoomOutLabel: 'Dézoomer',
    closeLabel: 'Fermer',
  }

  const data = useStaticQuery(GSQ)
  console.log('XXXXXXXXXXXXXXX')
  console.log(data)
  // const images = []
  const images = data.allMarkdownRemark.edges.map(({ node }, index) => ({
    ...node.frontmatter.hero_slider.childImageSharp,
    // Generate name based on the index as caption.
    caption: `Image ${index}`,
  }))
  return (
    <Section tabletPadding='80px 0 150px' mobile='66px 0 100px'>
      <GalleryWrapper>
        <Gallery images={images} lightboxOptions={lightboxOptions} colWidth={100} gutter='0.75rem' rowMargin={-12} />
      </GalleryWrapper>
    </Section>
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
                thumb: gatsbyImageData(
                  placeholder: DOMINANT_COLOR
                  layout: CONSTRAINED
                  width: 600

                  quality: 100
                )
                full: gatsbyImageData(placeholder: DOMINANT_COLOR, layout: FULL_WIDTH, width: 1200, quality: 100)
              }
            }
          }
        }
      }
    }
  }
`

export default GalleryMobile
