import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Content, PageTitle, Wrapper, Flex, Section } from '../shared/Index.styled'
import { Boat } from '../icons/Boat.icon'

export default function DownflowText() {
  const data = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { layout: { eq: "downflow-text" } }) {
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
      </Wrapper>
      <Boat isRiverRightCornerPage={true} />
      <Boat isRiverLeftCornerPage={true} />
    </Section>
  )
}
