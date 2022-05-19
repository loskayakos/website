import React from 'react'
import { Flex, Section } from '../shared/Index.styled'
import HeroSlider from './HeroSlider'
import HeroText from './HeroText'

const Hero = () => {
  return (
    <>
      <Section tabletPadding='0 0 130px'>
        <Flex direction='column' tabletDirection='row'>
          <HeroText />
          <HeroSlider />
        </Flex>
      </Section>
    </>
  )
}

export default Hero
