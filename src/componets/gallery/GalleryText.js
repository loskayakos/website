import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Content, PageTitle, Wrapper, Flex } from '../shared/Index.styled'
import { Button } from '../shared/Button'
import { NounArrow } from './../icons/NounArrow.icon'
import Camera from './../icons/Camera.icon'

export default function GalleryText() {
  const data = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { layout: { eq: "gallery-text" } }) {
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
    <Wrapper tabletMaxWidth='50%'>
      <Wrapper mobile='8px 0 16px' paddingTablet='8px 0 24px' tabletMaxWidth='550px'>
        <PageTitle>{page.title}</PageTitle>
        <Camera />
      </Wrapper>
      <Wrapper paddingTablet='0 0 16px'>
        <Content dangerouslySetInnerHTML={{ __html: html }} />
      </Wrapper>
      <Wrapper>
        <Flex tabletDirection='column'>
          <Button name='Rezerwuj' />
          <NounArrow isArrowTopRight={true} />
        </Flex>
      </Wrapper>
    </Wrapper>
  )
}
