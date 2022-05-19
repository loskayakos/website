import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Flex, SectionTitle, TextRegular, Wrapper } from './Index.styled'
import styled from 'styled-components'
import variables from '../../styles/variables'

const ContactTextRegular = styled(TextRegular)`
  display: flex;
  gap: 24px;

  & span {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 150%;
  }
  @media ${variables.device.tabletXL} {
    gap: 8px;
    flex-direction: column;
    padding: 0 36px;
    flex-direction: column;
    border-right: 1px solid #ced4da;
    &:last-of-type {
      border-right: none;
    }
  }
`

const Company = ({ isTextBlack, isContact }) => {
  const data = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { layout: { eq: "company" } }) {
        frontmatter {
          title
          bank_number
          nip
          regon
        }
      }
    }
  `)

  const { markdownRemark } = data
  const { frontmatter: page } = markdownRemark

  return (
    <Wrapper mobile={isContact ? '0' : '0 0 49px 0'}>
      <Flex direction='column'>
        {isContact ? (
          <Flex direction='column' tabletDirection='row' gap='24' items='center'>
            <ContactTextRegular color={isTextBlack ? '#000000' : '#ffffff'} size='18'>
              {' '}
              <span>NIP</span> {page.nip}
            </ContactTextRegular>
            <ContactTextRegular color={isTextBlack ? '#000000' : '#ffffff'}>
              {' '}
              <span>Regon</span> {page.regon}
            </ContactTextRegular>
          </Flex>
        ) : (
          <>
            <SectionTitle color='#ffffff'>{page.title}</SectionTitle>
            <Flex direction='column'>
              <TextRegular color={isTextBlack ? '#000000' : '#ffffff'}>NIP: {page.nip}</TextRegular>
              <TextRegular color={isTextBlack ? '#000000' : '#ffffff'}>nr konta: {page.bank_number}</TextRegular>

              <TextRegular color={isTextBlack ? '#000000' : '#ffffff'}>Regon: {page.regon}</TextRegular>
            </Flex>
          </>
        )}
      </Flex>
    </Wrapper>
  )
}

export default Company
