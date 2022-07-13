import React from 'react'
import { Flex, InternalLink, Section } from '../componets/shared/Index.styled'
import Media from '../componets/shared/Media'
import Company from '../componets/shared/Company'
import Contact from '../componets/shared/Contact'
import { Link } from 'gatsby'
import { routeLinks } from './../config/routing'

const Footer = () => {
  return (
    <>
      <Section background='#272B30' mobile='48px 20px' tabletPadding='52px 5.5%'>
        <Flex direction='column' tabletDirection='row' tabletContent='space-between'>
          <Contact />
          <Company />
          <Media />
        </Flex>
      </Section>

      <Section mobile='0 0 48px' tabletPadding='0 0 52px'>
        <Flex gap='16' direction='column' items='center' content='center' tabletDirection='row' tabletGap='24'>
          © {new Date().getFullYear()} Los Kayakos. All rights reserved.{' '}
          <InternalLink to={routeLinks.statute}>Regulaminy</InternalLink>
        </Flex>
      </Section>
    </>
  )
}
export default Footer
