import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { useWindowSize } from '../../utils/use-windowsize'
import { Flex, Section, SectionTitle, SubSectionTitle, TextRegular, Wrapper, Figure } from '../Index.styled'
import styled from 'styled-components'
import variables from '../../../styles/variables'

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

function ReservationStep({ order, title, description, image, alt, index }) {
  const { width } = useWindowSize()
  const breakpoint = 992

  return (
    <>
      {width < breakpoint && typeof window !== 'undefined' ? (
        <Wrapper key={index} mobile='0 0 40px'>
          <Flex items='flex-start' gap='9'>
            <NumberWork>{order}</NumberWork>
            <Wrapper mobile='0 0 32px'>
              <Flex direction='column'>
                <SubSectionTitle style={{ marginTop: '18px' }}>{title}</SubSectionTitle>
                <TextRegular>{description}</TextRegular>
              </Flex>
            </Wrapper>
          </Flex>
          <Figure>
            <GatsbyImage image={getImage(image)} alt={alt} className='work-img' />
          </Figure>
        </Wrapper>
      ) : (
        <Wrapper key={index} paddingTablet='0 9.24% 40px'>
          <Flex tabletDirection={index % 2 ? '' : 'row-reverse'} tabletContent='space-between' tabletItems='center'>
            <Figure>
              <GatsbyImage image={getImage(image)} alt={alt} className='work-img' />
            </Figure>
            <Flex items='flex-start' gap='9' tabletBasis='50%'>
              <NumberWork>{order}</NumberWork>
              <Wrapper mobile='0 0 32px'>
                <Flex direction='column'>
                  <SubSectionTitle style={{ marginTop: '42px' }}>{title}</SubSectionTitle>
                  <TextRegular>{description}</TextRegular>
                </Flex>
              </Wrapper>
            </Flex>
          </Flex>
        </Wrapper>
      )}
    </>
  )
}

export default ReservationStep
