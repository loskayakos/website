import styled from 'styled-components'
import variables from '../../styles/variables'
import { Link } from 'gatsby'

export const PageSection = styled.section`
  padding: 0 20px;

  @media ${variables.device.tabletXL} {
    padding: 0 5.5%;
    max-width: 1920px;
    margin: 0 auto;
  }
`

export const Section = styled.section`
  overflow: hidden;
  padding: ${({ mobile }) => mobile};
  background-color: ${({ background }) => (background ? background : '#FFFFFF')};
  position: relative;

  @media ${variables.device.tabletXL} {
    padding: ${({ tabletPadding }) => tabletPadding};
    max-width: ${({ tabletMaxWidth }) => tabletMaxWidth};
    margin: ${({ tabletMargin }) => tabletMargin};
  }
`
export const Wrapper = styled.div`
  position: relative;
  padding: ${({ mobile }) => mobile};
  width: ${({ widthMobile }) => widthMobile};

  @media ${variables.device.tabletXL} {
    width: ${({ widthTablet }) => widthTablet};
    max-width: ${({ tabletMaxWidth }) => tabletMaxWidth};
    margin: ${({ tabletMargin }) => tabletMargin};
    padding: ${({ paddingTablet }) => paddingTablet};
  }
`
export const PageTitle = styled.h1`
  position: relative;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 600;
  font-size: ${({ mobileFontSize }) => (mobileFontSize ? '' : '24px')};
  line-height: 150%;
  & span {
    color: ${variables.color.primary};
  }
  @media ${variables.device.tabletXL} {
    font-size: 42px;
  }
`
export const SectionTitle = styled.h2`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 150%;
  color: ${({ color }) => (color ? color : '#000000')};
`
export const SubSectionTitle = styled.h3`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 150%;

  color: #152c5b;

  text-shadow: 0px 100px 80px rgba(21, 44, 91, 0.03), 0px 41.7776px 33.4221px rgba(21, 44, 91, 0.0215656),
    0px 22.3363px 17.869px rgba(21, 44, 91, 0.0178832), 0px 12.5216px 10.0172px rgba(21, 44, 91, 0.015),
    0px 6.6501px 5.32008px rgba(21, 44, 91, 0.0121168), 0px 2.76726px 2.21381px rgba(21, 44, 91, 0.00843437);
  ${({ isWhiteColor }) => isWhiteColor && 'color: #ffffff; text-shadow: none; font-size: 16px; '};
  ${({ marginTop }) => marginTop};
  @media ${variables.device.tabletXL} {
    font-weight: 600;
    font-size: 24px;
    ${({ tabletMarginTop }) => tabletMarginTop};
  }
`
export const Flex = styled.div`
  display: flex;
  gap: ${({ gap }) => (gap ? `${gap}px` : '')};
  flex-direction: ${({ direction }) => direction};
  align-items: ${({ items }) => items};
  justify-content: ${({ content }) => content};
  flex-basis: ${({ basis }) => basis};
  flex-wrap: ${({ wrap }) => wrap};
  && .is-active {
    transform: translateY(0%);
  }

  @media ${variables.device.tabletXL} {
    flex-direction: ${({ tabletDirection }) => tabletDirection};
    gap: ${({ tabletGap }) => (tabletGap ? `${tabletGap}px` : '')};
    align-items: ${({ tabletItems }) => (tabletItems ? tabletItems : '')};
    justify-content: ${({ tabletContent }) => tabletContent};
    flex: ${({ tabletFlex }) => tabletFlex};
    flex-basis: ${({ tabletBasis }) => tabletBasis};
    flex-wrap: ${({ tabletWrap }) => tabletWrap};
  }
`
export const TextRegular = styled.p`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: ${({ weight }) => (weight ? weight : '400')};
  font-size: ${({ size }) => (size ? `${size}px` : `${variables.pxToRem(16)}`)};
  line-height: 150%;
  color: ${({ color }) => (color ? color : '#000000')};
  margin-top: ${variables.pxToRem(8)};
`

export const OutsideLink = styled.a`
  text-decoration: none;
  color: inherit;
`
export const Content = styled.div`
  & p {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 400;
    font-size: ${variables.pxToRem(16)};
    line-height: 150%;
    color: ${variables.color.black};
    padding-bottom: ${variables.pxToRem(16)};
    ${({ isColor }) => isColor && 'color: #ffffff'};
    text-align: ${({ textAlign }) => textAlign};
  }
  @media ${variables.device.tabletXL} {
    & p {
      padding-bottom: ${variables.pxToRem(24)};
    }
  }
`
export const Figure = styled.figure`
  width: 100%;
  height: auto;
  border-radius: 16px;
  & .gatsby-image-wrapper {
    width: 100%;
    border-radius: 16px;
    & img {
      width: 100%;
      border-radius: 16px;
    }
  }

  @media ${variables.device.tabletXL} {
    width: auto;
  }
`
export const InternalLink = styled(Link)`
  color: #000000;
  ${({ isOfferTemplate }) => isOfferTemplate && 'color:#2764AB; text-transform: uppercase; '};
  ${({ isCurrent }) =>
    isCurrent &&
    `color:  #52782C;
          font-weight: 600;`};
  ${({ isButton }) => isButton && `color: inherit; padding: 12px 56.5px; font-weight: 700;`}
`
