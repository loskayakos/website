import React from 'react'
import { Facebook } from '../icons/Facebook.icon'
import { Instagram } from './../icons/Instagram.icon'
import { InstagramBlue } from '../icons/InstagramBlue.icon'
import { FacebookBlue } from '../icons/FacebookBlue.icon'
import { SectionTitle, Flex } from './Index.styled'

const Media = ({ isBlueIcon, isContact }) => {
  return (
    <Flex gap='22' items='center' tabletItems={isContact ? 'center' : 'flex-start'} content={isContact && 'center'}>
      {isContact ? '' : <SectionTitle color='#ffffff'>Media</SectionTitle>}
      <a href=''>
        <figure>{isBlueIcon ? <FacebookBlue /> : <Facebook />}</figure>
      </a>
      <a href=''>
        <figure>{isBlueIcon ? <InstagramBlue /> : <Instagram />}</figure>
      </a>
    </Flex>
  )
}
export default Media
