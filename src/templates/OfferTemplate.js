import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Page from '../layout/Page'
import { Arrow } from '../componets/icons/Arrow.icon'
import {
  Flex,
  Content,
  Wrapper,
  PageTitle,
  PageSection,
  InternalLink,
  Figure,
  Section,
} from './../componets/shared/Index.styled'
import ReservationSteps from '../componets/shared/reservation/ReservationSteps'
import PricesList from '../componets/shared/prices/PricesList'
import { routeLinks } from './../config/routing'
import { useWindowSize } from '../componets/utils/use-windowsize'
import { Boat } from '../componets/icons/Boat.icon'

export default function OfferTemplate({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter: page, html } = markdownRemark
  const {
    title_offer_details,
    offer_details_picture_left_alt,
    offer_details_picture_right_alt,
    prices_list_relations,
    booking,
    offer_details_picture_left,
    offer_details_picture_right,
  } = page

  const rightImage = getImage(offer_details_picture_right)
  const leftImage = getImage(offer_details_picture_left)

  const { width } = useWindowSize()
  const breakpoint = 992

  return (
    <Page>
      <PageSection>
        <Section mobile='0 0 32px'>
          <Wrapper mobile='30px 0 42px' tabletPadding='24px 108px'>
            <InternalLink isOfferTemplate={true} to={routeLinks.offer}>
              <Flex items='center' gap='10'>
                <Arrow isOfferTemplate={true} />
                <span>Wróć do "oferta"</span>
              </Flex>
            </InternalLink>
          </Wrapper>

          {width < breakpoint && typeof window !== 'undefined' && (
            <Wrapper mobile='0 0 23px'>
              <PageTitle>{title_offer_details}</PageTitle>
            </Wrapper>
          )}
          <Wrapper>
            <Flex tabletContent='space-between' direction='column' tabletDirection='row' gap='20'>
              <Figure>
                <GatsbyImage image={rightImage} alt={offer_details_picture_right_alt} />
              </Figure>
              <Figure>
                <GatsbyImage image={leftImage} alt={offer_details_picture_left_alt} />
              </Figure>
            </Flex>
            <Boat isRiverTop={true} isOfferTemplate={true} />
          </Wrapper>

          <Wrapper paddingTablet='72px 0 0' mobile='89px 0 0' tabletMaxWidth='977px'>
            {width >= breakpoint && typeof window !== 'undefined' && <PageTitle>{title_offer_details}</PageTitle>}

            <Content dangerouslySetInnerHTML={{ __html: html }} />
          </Wrapper>
        </Section>
      </PageSection>

      <ReservationSteps steps={booking} />
      <PricesList priceList={prices_list_relations} />
    </Page>
  )
}
export const pageQuery = graphql`
  query($fileAbsolutePath: String!) {
    markdownRemark(fileAbsolutePath: { eq: $fileAbsolutePath }) {
      frontmatter {
        title_offer_details
        offer_details_picture_left_alt
        offer_details_picture_right_alt
        slug
        prices_list_relations {
          frontmatter {
            title
            description_prices_list
            title_section_prices
            column_title_1
            column_title_2
            column_title_3
            star
            prices {
              frontmatter {
                price_1
                price_2
                price_3
                name_price
              }
            }
          }
        }
        booking {
          frontmatter {
            title_reservation
            reservation_steps {
              frontmatter {
                order
                subtitle_reservation
                reservation_picture_alt
                short_description
                reservation_picture {
                  childImageSharp {
                    gatsbyImageData(placeholder: DOMINANT_COLOR, layout: CONSTRAINED)
                  }
                }
              }
            }
          }
        }
        offer_details_picture_left {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
          }
        }
        offer_details_picture_right {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
          }
        }
      }
      html
    }
  }
`
