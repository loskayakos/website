import React from 'react'
import { Wrapper, SectionTitle, TextRegular, SubSectionTitle, Flex, Section, PageSection } from './../Index.styled'
import variables from '../../../styles/variables'
import styled from 'styled-components'
import { Button } from '../Button'
import { clampBuilder } from './../../../helpers/clampBuilder'
import { NounArrow } from '../../icons/NounArrow.icon'

const WrapperPricesList = styled(Wrapper)`
  background: rgba(82, 120, 44, 0.1);
  box-shadow: 0px 1px 0px #ced4da;
  border-radius: 8px 8px 0px 0px;
`
const TextRegularPrices = styled(TextRegular)`
  flex-basis: 25%;
  font-size: ${clampBuilder(300, 1920, 13, 16)};
  ${({ isCenter }) => isCenter && `text-align: center; @media ${variables.device.tabletXL} {text-align: left}`}
`
const TextRegularStar = styled(TextRegular)`
  font-size: ${clampBuilder(300, 1920, 11, 14)};
  color: #272b30;
`
const FlexPrices = styled(Flex)`
  box-shadow: 0px 1px 0px #ced4da;
  height: 64px;
`

function PricesList({ priceList }) {
  return (
    <PageSection>
      <Section mobile='0 0 130px' tabletPadding='0 0 115px '>
        {priceList.map(({ frontmatter }, index) => {
          const {
            title,
            description_prices_list,
            column_title_1,
            column_title_2,
            column_title_3,
            star,
            prices,
            title_section_prices,
          } = frontmatter

          return (
            <Wrapper key={index}>
              <Wrapper mobile='0 0 24px'>
                <SectionTitle>{title_section_prices}</SectionTitle>
                <TextRegular>{description_prices_list}</TextRegular>
              </Wrapper>

              <WrapperPricesList>
                <Flex content='center' items='center'>
                  <SubSectionTitle>{title}</SubSectionTitle>
                </Flex>
              </WrapperPricesList>
              <FlexPrices content='space-between' items='center'>
                <TextRegularPrices></TextRegularPrices>
                <TextRegularPrices weight='700'>{column_title_1}</TextRegularPrices>
                <TextRegularPrices weight='700'>{column_title_2}</TextRegularPrices>
                <TextRegularPrices weight='700'>{column_title_3}</TextRegularPrices>
              </FlexPrices>
              {prices.map(({ frontmatter }, index) => {
                const { name_price, price_1, price_2, price_3 } = frontmatter

                return (
                  <Wrapper>
                    <FlexPrices key={index} content='space-between' items='center'>
                      <TextRegularPrices weight='700'>{name_price}</TextRegularPrices>
                      <TextRegularPrices isCenter={true}>{price_1}</TextRegularPrices>
                      <TextRegularPrices isCenter={true}>{price_2}</TextRegularPrices>
                      <TextRegularPrices isCenter={true}>{price_3}</TextRegularPrices>
                    </FlexPrices>
                  </Wrapper>
                )
              })}
              <Wrapper mobile='24px 0'>
                <TextRegularStar>{star}</TextRegularStar>
              </Wrapper>

              <Flex content='center'>
                <Wrapper>
                  <Button name='Rezerwuj' />
                  <NounArrow isArrowTopLeft={true} />
                </Wrapper>
              </Flex>
            </Wrapper>
          )
        })}
      </Section>
    </PageSection>
  )
}

export default PricesList
