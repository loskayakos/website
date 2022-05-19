import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Content, PageTitle, Wrapper, Flex } from '../shared/Index.styled'
import Email from '../icons/Email.icon'
import Phone from '../icons/Phone.icon'

export default function ContactText() {
  const data = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { layout: { eq: "contact-text" } }) {
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
    <Wrapper>
      <Wrapper mobile='8px 0 16px' paddingTablet='8px 0 24px' tabletMaxWidth='615px' tabletMargin='0 auto'>
        <Flex content='center'>
          <Wrapper>
            <PageTitle>{page.title}</PageTitle>
            <Email />
            <Phone />
          </Wrapper>
        </Flex>
      </Wrapper>
      <Wrapper mobile='0 0 8px' tabletMaxWidth='600px' tabletMargin='0 auto'>
        <Content dangerouslySetInnerHTML={{ __html: html }} textAlign='center' />
      </Wrapper>
    </Wrapper>
  )
}
