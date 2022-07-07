import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Button } from '../shared/Button'
import { SliderArrow } from '../icons/SliderArrow.icon'
import { Sun } from '../icons/Sun.icon'
import { Flex, Section, SectionTitle, Wrapper, SubSectionTitle, InternalLink } from '../shared/Index.styled'
import styled from 'styled-components'
import { useWindowSize } from './../utils/use-windowsize'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css'
import variables from '../../styles/variables'
import { Boat } from '../icons/Boat.icon'
import { ArrowOffer } from '../icons/ArrowOffer.icon'
import { routeLinks } from './../../config/routing'
import oferta from './../../pages/oferta'

const OfferSection = styled(Section)`
  @media ${variables.device.tabletXL} {
    & .swiper-slide {
      padding-bottom: 20px;
    }
    & .offer-prev,
    .offer-next {
      cursor: pointer;
    }
  }
`

const OfferDescription = styled.p`
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 23px;

  display: flex;
  align-items: center;
  letter-spacing: -0.1px;

  color: #6a7fa8;
`
const Figure = styled.figure`
  border-radius: 16px;
  & .offer-img {
    border-radius: 16px;
    width: 100%;
    max-height: 244px;
    & img {
      border-radius: 16px;
    }
  }
`
const OfferWrapper = styled.div`
  padding-bottom: 50px;
  border-radius: 16px;
  max-width: 383px;
  box-shadow: rgb(0 0 0 / 16%) 0px 0px 0px;
  transition: scale(1);
  transition-duration: 0.4s;
  will-change: box-shadow;
  box-shadow: 0.7s cubic-bezier(0.08, 0.635, 0.25, 0.995);
  margin: 0 auto;

  @media ${variables.device.tabletXL} {
    padding: 28.5px 0;
    margin: 0;
    /* will-change: transform, box-shadow;
    transition: transform 1.2s cubic-bezier(0.08, 0.635, 0.25, 0.995),
      box-shadow 0.7s cubic-bezier(0.08, 0.635, 0.25, 0.995); */

    &:hover {
      background: #ffffff;
      /* Shadow */

      box-shadow: -20px -35px 50px rgba(21, 44, 91, 0.03), 0px 75px 80px rgba(21, 44, 91, 0.03),
        0px 31.3332px 33.4221px rgba(21, 44, 91, 0.0215656), 0px 16.7522px 17.869px rgba(21, 44, 91, 0.0178832),
        0px 9.39116px 10.0172px rgba(21, 44, 91, 0.015), 0px 4.98758px 5.32008px rgba(21, 44, 91, 0.0121168),
        0px 2.07544px 2.21381px rgba(21, 44, 91, 0.00843437);
      border-radius: 16px;
      padding: 28.5px 46.5px;
    }
  }
  @media ${variables.device.laptop} {
    width: 100%;
    height: 420px;
    overflow-y: hidden;
  }
`
const ArrowDescription = styled.span`
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 600;
  font-size: 11.5862px;
  line-height: 19px;

  display: flex;
  align-items: center;
  text-align: right;
  letter-spacing: -0.0827586px;
  text-decoration-line: underline;

  color: #2764ab;
`

const Offer = ({ isOfferSubpage }) => {
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark(filter: { frontmatter: { layout: { eq: "offer" } } }) {
        edges {
          node {
            frontmatter {
              offer_picture {
                childImageSharp {
                  gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
                }
              }
              short_description
              title
              offer_picture_alt
              slug
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
    <OfferSection mobile={isOfferSubpage ? '48px 20px 0 20px' : '84px 20px 0 20px'} tabletPadding='0 0 0 5.5%'>
      <Wrapper paddingTablet='0 0 16px' mobile='0 0 8px'>
        {isOfferSubpage ? '' : <SectionTitle color='#101213'>Poznaj naszą ofertę</SectionTitle>}
      </Wrapper>

      {width < breakpoint && typeof window !== 'undefined' && (
        <>
          {edges.map(({ node }, id) => {
            const { frontmatter: page } = node
            const image = getImage(page.offer_picture)

            return (
              <InternalLink to={routeLinks.offer(page.slug)}>
                <OfferWrapper key={id}>
                  <Figure>
                    <GatsbyImage image={image} alt={page.offer_picture_alt} className='offer-img' />
                  </Figure>
                  <Flex direction='column'>
                    <Wrapper mobile='8px 0 0 '>
                      <SubSectionTitle>{page.title}</SubSectionTitle>
                    </Wrapper>
                    <Wrapper mobile='4px 0 0'>
                      <OfferDescription>{page.short_description}</OfferDescription>
                    </Wrapper>
                  </Flex>
                  <Wrapper mobile='9.5px 0 0'>
                    <Flex items='center' content='flex-end'>
                      <Button name='Zobacz więcej' isNoColor={true} />
                      <SliderArrow isRight={true} />
                    </Flex>
                  </Wrapper>
                </OfferWrapper>
              </InternalLink>
            )
          })}
          {isOfferSubpage ? <Boat isRiverTop={true} /> : <Sun />}
        </>
      )}

      {width > breakpoint && typeof window !== 'undefined' && (
        <>
          <Swiper
            slidesPerView={3}
            spaceBetween={10}
            loop={true}
            breakpoints={{
              992: {
                slidesPerView: 3.6,
                spaceBetween: 50,
              },
            }}
            navigation={{
              prevEl: '.offer-prev',
              nextEl: '.offer-next',
              clickable: true,
            }}
            modules={[Navigation]}
          >
            {edges.map(({ node }, id) => {
              const { frontmatter: page } = node
              const image = getImage(page.offer_picture)

              return (
                <SwiperSlide>
                  <InternalLink to={routeLinks.offer(page.slug)}>
                    <OfferWrapper key={id}>
                      <Figure>
                        <GatsbyImage image={image} alt={page.offer_picture_alt} className='offer-img' />
                      </Figure>
                      <Flex direction='column'>
                        <Wrapper mobile='12px'>
                          <Wrapper mobile='8px 0 0 '>
                            <SubSectionTitle>{page.title}</SubSectionTitle>
                          </Wrapper>
                          <Wrapper mobile='4px 0 0'>
                            <OfferDescription>{page.short_description}</OfferDescription>
                          </Wrapper>
                          {isOfferSubpage && (
                            <Wrapper paddingTablet='16px 0 0'>
                              <Flex tabletItems='center' tabletGap='6' tabletContent='flex-end'>
                                <ArrowDescription>Szczegóły</ArrowDescription>
                                <ArrowOffer />
                              </Flex>
                            </Wrapper>
                          )}
                        </Wrapper>
                      </Flex>
                    </OfferWrapper>
                  </InternalLink>
                </SwiperSlide>
              )
            })}
          </Swiper>
          <Flex tabletDirection='row-reverse' tabletContent='space-between'>
            <Wrapper mobile='27px 62px 0 62px'>
              <Flex content='flex-end' gap='54'>
                <div className='offer-prev'>
                  <Flex>
                    <span>
                      <SliderArrow />
                    </span>
                  </Flex>
                </div>
                <div className='offer-next'>
                  <Flex>
                    <span>
                      <SliderArrow isRight={true} />
                    </span>
                  </Flex>
                </div>
              </Flex>
            </Wrapper>
            {isOfferSubpage ? <Boat isRiverTop={true} /> : <Sun />}
          </Flex>
        </>
      )}
    </OfferSection>
  )
}

export default Offer
