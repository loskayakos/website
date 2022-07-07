import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Facebook } from '../icons/Facebook.icon'
import { Instagram } from './../icons/Instagram.icon'
import { InstagramBlue } from '../icons/InstagramBlue.icon'
import { FacebookBlue } from '../icons/FacebookBlue.icon'
import { SectionTitle, Flex } from './Index.styled'

const Media = ({ isBlueIcon, isContact }) => {
  const data = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { layout: { eq: "media" } }) {
        frontmatter {
          facebook
          instagram
        }
      }
    }
  `)

  const { markdownRemark } = data
  const { frontmatter: page } = markdownRemark

  return (
    <Flex gap='22' items='center' tabletItems={isContact ? 'center' : 'flex-start'} content={isContact && 'center'}>
      {isContact ? '' : <SectionTitle color='#ffffff'>Media</SectionTitle>}
      <a href={`${page.facebook}`} target='_blank'>
        <figure>{isBlueIcon ? <FacebookBlue /> : <Facebook />}</figure>
      </a>
      <a href={`${page.instagram}`} target='_blank'>
        <figure>{isBlueIcon ? <InstagramBlue /> : <Instagram />}</figure>
      </a>
    </Flex>
  )
}
export default Media
