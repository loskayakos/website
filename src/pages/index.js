import * as React from 'react'
import Page from '../layout/Page'
import Hero from '../componets/home/hero'
import Offer from '../componets/home/Offer'
import AboutUs from '../componets/home/AboutUs'
import HowWeDoWork from '../componets/home/HowWeDoWork'

const IndexPage = () => {
  return (
    <Page>
      <Hero />
      <Offer />
      <AboutUs />
      <HowWeDoWork />
    </Page>
  )
}

export default IndexPage
