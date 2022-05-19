import React from 'react'
import ContactText from '../componets/contact/ContactText'
import Company from '../componets/shared/Company'
import Contact from '../componets/shared/Contact'
import Media from '../componets/shared/Media'
import Page from '../layout/Page'
import { Section, Flex, Wrapper } from '../componets/shared/Index.styled'
import { Boat } from './../componets/icons/Boat.icon'

import { useWindowSize } from './../componets/utils/use-windowsize'

const ContactPage = () => {
  const { width } = useWindowSize()
  const breakpoint = 992
  return (
    <Page>
      <Section tabletPadding='96px  5.5% 0 ' mobile='94px 20px 0'>
        {width > breakpoint && typeof window !== 'undefined' && (
          <>
            <Boat isRiverRightCornerPage={true} />
            <Boat isRiverLeftCornerPage={true} />
          </>
        )}

        <ContactText />
        <Media isBlueIcon={true} isContact={true} />
        <Wrapper paddingTablet='64px 0 131px' mobile='50px 0 105px'>
          <Flex tabletContent='center' direction='column' tabletDirection='row' gap='24' tabletGap='0'>
            <Contact isTextBlack={true} isContact={true} />
            <Company isTextBlack={true} isContact={true} />
          </Flex>
        </Wrapper>
      </Section>
    </Page>
  )
}

export default ContactPage
