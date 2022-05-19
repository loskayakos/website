import React from 'react'
import CarouselCard from './swiper/CarouselCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css'
import { Wrapper } from './Index.styled'
import CarouselCardNavigation from './swiper/CarouselCardNavigation'
import { useWindowSize } from './../utils/use-windowsize'

const SwiperCarousel = ({ sliders, isOnlyImage, className }) => {
  const { allMarkdownRemark } = sliders
  const { edges } = allMarkdownRemark
  const { width } = useWindowSize()
  const breakpoint = 992

  return (
    <>
      {width >= breakpoint && (
        <Wrapper widthTablet='46%' tabletMaxWidth='600px'>
          <Swiper
            slidesPerView={1}
            spaceBetween={0}
            loop={true}
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
              const image = hero_slider

              return (
                <SwiperSlide>
                  <div kay={index}>
                    <CarouselCard
                      isOnlyImage={isOnlyImage}
                      image={image}
                      alt={hero_slider_alt}
                      className={className}
                      width={600}
                    />
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
          <Wrapper tabletMaxWidth='50%' tabletMargin='0 0 0 50%'>
            <CarouselCardNavigation isGallery={true} />
          </Wrapper>
        </Wrapper>
      )}
    </>
  )
}

export default SwiperCarousel
