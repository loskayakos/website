import React from 'react'
import { Flex, Section } from '../componets/shared/Index.styled'
import Media from '../componets/shared/media'
import Company from '../componets/shared/Company'
import Contact from '../componets/shared/Contact'

const Footer = () => {
  return (
    <Section background='#272B30' mobile='48px 20px' tabletPadding='52px 5.5%'>
      <Flex direction='column' tabletDirection='row' tabletContent='space-between'>
        <Contact />
        <Company />
        <Media />
      </Flex>
    </Section>
  )
}
export default Footer
