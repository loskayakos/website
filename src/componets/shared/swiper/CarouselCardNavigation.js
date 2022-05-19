import React from 'react'
import { Wrapper, Flex } from '../Index.styled'
import styled from 'styled-components'
import { SliderArrow } from './../../icons/SliderArrow.icon'

const ArrowSpan = styled.span`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
`
const ArrowWrapper = styled.div`
  cursor: pointer;
`

export default function CarouselCardNavigation({ isGallery }) {
  return (
    <div>
      <Wrapper mobile={isGallery ? '27px 0 0' : '27px 62px 0 62px'}>
        <Flex content='space-between'>
          <ArrowWrapper className='prev'>
            <Flex>
              <span>
                <SliderArrow />
              </span>
              <ArrowSpan>Poprzednie</ArrowSpan>
            </Flex>
          </ArrowWrapper>
          <ArrowWrapper className='next'>
            <Flex>
              <ArrowSpan>Następne</ArrowSpan>
              <span>
                <SliderArrow isRight={true} />
              </span>
            </Flex>
          </ArrowWrapper>
        </Flex>
      </Wrapper>
    </div>
  )
}
