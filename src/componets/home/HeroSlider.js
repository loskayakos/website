import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css'

import { SliderArrow } from './../icons/SliderArrow.icon'
import { Flex, Wrapper } from '../shared/Index.styled'
import styled from 'styled-components'
import CarouselCard from '../shared/swiper/CarouselCard'

const ArrowSpan = styled.span`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
`
const SliderWrapper = styled(Wrapper)`
  & .swiper {
    padding-top: 100px;
  }
  && .figure-down {
    transform: translateY(-54px);
  }
  & .next,
  .prev {
    cursor: pointer;
  }
`

const HeroSlider = () => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: { frontmatter: { layout: { eq: "hero-slider" } } }) {
        edges {
          node {
            frontmatter {
              hero_slider {
                childImageSharp {
                  gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
                }
              }
              hero_slider_alt
            }
          }
        }
      }
    }
  `)

  const { allMarkdownRemark } = data
  const { edges } = allMarkdownRemark

  return (
    <>
      <SliderWrapper mobile='0 0 0 20px' widthTablet='55%'>
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          loop={true}
          breakpoints={{
            360: {
              slidesPerView: 1.5,
              spaceBetween: 24,
            },
            992: {
              slidesPerView: 2.5,
              spaceBetween: 24,
            },
          }}
          navigation={{
            prevEl: '.prev',
            nextEl: '.next',
            clickable: true,
          }}
          modules={[Navigation]}
        >
          {edges.map(({ node }, index) => {
            const { frontmatter: page } = node
            const { hero_slider_alt, hero_slider } = page
            return (
              <SwiperSlide>
                <div key={index} className={`figure-${index % 2 ? 'down' : 'top'}`}>
                  <CarouselCard isOnlyImage={true} image={hero_slider} alt={hero_slider_alt} />
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
        <Wrapper mobile='27px 62px 0 62px' paddingTablet='56px 21% 0 43%'>
          <Flex content='space-between'>
            <div className='prev'>
              <Flex>
                <span>
                  <SliderArrow />
                </span>
                <ArrowSpan>Poprzednie</ArrowSpan>
              </Flex>
            </div>
            <div className='next'>
              <Flex>
                <ArrowSpan>Następne</ArrowSpan>
                <span>
                  <SliderArrow isRight={true} />
                </span>
              </Flex>
            </div>
          </Flex>
        </Wrapper>
      </SliderWrapper>
    </>
  )
}

export default HeroSlider
