import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { Flex, Wrapper, SubSectionTitle } from '../Index.styled'
import styled from 'styled-components'
import variables from '../../../styles/variables'

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
  & .gatsby-image-wrapper {
    border-radius: 16px;
    width: 100%;
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
  transition: box-shadow 0.1s ease-in 0s, transform 0.1s ease-in 0s;

  @media ${variables.device.tabletXL} {
    padding: 28.5px 46.5px;
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
  }
`

const CarouselCard = ({ isOnlyImage, image, alt, title, description, id, className }) => {
  return (
    <>
      {isOnlyImage ? (
        <Figure>
          <GatsbyImage image={getImage(image)} alt={alt} className={className} />
        </Figure>
      ) : (
        <OfferWrapper key={id}>
          <Figure>
            <GatsbyImage image={getImage(image)} alt={alt} className={className} />
          </Figure>
          <Flex direction='column'>
            <Wrapper mobile='8px 0 0 '>
              <SubSectionTitle>{title}</SubSectionTitle>
            </Wrapper>
            <Wrapper mobile='4px 0 0'>
              <OfferDescription>{description}</OfferDescription>
            </Wrapper>
          </Flex>
        </OfferWrapper>
      )}
    </>
  )
}

export default CarouselCard
