import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Flex, Section, SectionTitle, TextRegular, OutsideLink, Wrapper } from '../../componets/shared/Index.styled'
import Locations from '../../componets/icons/Locations.icon'
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
  }
`
const Contact = ({ isTextBlack, isContact }) => {
  const data = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { layout: { eq: "contact" } }) {
        frontmatter {
          title
          phone
          location
          layout
          email
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
            <ContactTextRegular color={isTextBlack ? '#000000' : '#ffffff'}>
              {' '}
              <span>Telefon</span>
              <OutsideLink href='tel:{page.phone}'>{page.phone}</OutsideLink>
            </ContactTextRegular>
            <ContactTextRegular color={isTextBlack ? '#000000' : '#ffffff'}>
              {' '}
              <span> E-mail</span>
              <OutsideLink href='mailto:`${page.email}`'>{page.email}</OutsideLink>
            </ContactTextRegular>
          </Flex>
        ) : (
          <>
            <SectionTitle color={isTextBlack ? '#000000' : '#ffffff'}>{page.title}</SectionTitle>
            <Flex direction='column'>
              <TextRegular color={isTextBlack ? '#000000' : '#ffffff'}>
                tel:
                <OutsideLink href='tel:{page.phone}'>{page.phone}</OutsideLink>
              </TextRegular>
              <TextRegular color={isTextBlack ? '#000000' : '#ffffff'}>
                e-mail: <OutsideLink href={`mailto:${page.email}`}>{page.email}</OutsideLink>
              </TextRegular>

              <TextRegular color={isTextBlack ? '#000000' : '#ffffff'}>
                <Flex direction='row'>
                  <Locations /> {page.location}
                </Flex>
              </TextRegular>
            </Flex>
          </>
        )}
      </Flex>
    </Wrapper>
  )
}
export default Contact
