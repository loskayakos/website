import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Content, PageTitle, Section, Wrapper } from '../shared/Index.styled'
import { Button } from '../shared/Button'
import { Bird } from '../icons/Bird.icon'
import { Boat } from '../icons/Boat.icon'
import { Sun } from '../icons/Sun.icon'

export default function OfferText() {
  const data = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { layout: { eq: "offer-subpage" } }) {
        frontmatter {
          title
        }
        html
      }
    }
  `)

  const { markdownRemark } = data
  const { frontmatter: page, html } = markdownRemark

  return (
    <Section tabletPadding='0 5.5% 23px'>
      <Wrapper tabletMaxWidth='600px' tabletMargin='0 auto' mobile='0 20px'>
        <Wrapper paddingTablet='96px 0 24px' mobile='138px 0 24px'>
          <PageTitle mobileFontSize='32px' style={{ textAlign: 'center' }}>
            {page.title}
          </PageTitle>
        </Wrapper>
        <Wrapper mobile='0 0 16px'>
          <Content dangerouslySetInnerHTML={{ __html: html }} />
        </Wrapper>

        <Button name='Rezerwuj' color={true} isOffer={true} />
        <Bird isOffer={true} />
        <Sun isOffer={true} />
      </Wrapper>
      <Boat isRiverRightCornerPage={true} />
    </Section>
  )
}
