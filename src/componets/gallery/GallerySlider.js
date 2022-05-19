import React from 'react'
import CarouselCard from '../shared/swiper/CarouselCard'
import { Flex } from '../shared/Index.styled'

const GallerySlider = ({ sliders, className, isOnlyImage }) => {
  const { allMarkdownRemark } = sliders
  const { edges } = allMarkdownRemark
  return (
    <Flex tabletGap='28' wrap='wrap' gap='30'>
      {edges.map(({ node }, index) => {
        const { frontmatter: page } = node
        const { hero_slider_alt, hero_slider } = page
        const image = hero_slider
        return (
          <Flex kay={index} tabletBasis='calc(100% / 4 - (28px - 28px / 4) )' basis='100%'>
            <CarouselCard
              isOnlyImage={isOnlyImage}
              image={image}
              alt={hero_slider_alt}
              className={className}
              width={300}
            />
          </Flex>
        )
      })}
    </Flex>
  )
}

export default GallerySlider
