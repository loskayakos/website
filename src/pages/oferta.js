import * as React from 'react'
import OfferText from '../componets/Offer/OfferText'
import Page from '../layout/Page'
import Offer from './../componets/home/Offer'

export default function oferta() {
  return (
    <>
      <Page>
        <OfferText />
        <Offer isOfferSubpage={true} />
      </Page>
    </>
  )
}
