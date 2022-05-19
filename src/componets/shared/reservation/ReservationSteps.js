import React from 'react'

import styled from 'styled-components'
import { Flex, Section, SectionTitle, SubSectionTitle, TextRegular, Wrapper, Figure } from '../Index.styled'
import { Boat } from '../../icons/Boat.icon'
import { NounArrow } from '../../icons/NounArrow.icon'
import { Bird } from '../../icons/Bird.icon'
import { useWindowSize } from '../../utils/use-windowsize'
import variables from '../../../styles/variables'
import Page from '../../../layout/Page'
import ReservationStep from './ReservationStep'

const SectionWork = styled(Section)`
  background: rgba(253, 254, 255, 0.9);
  /* Shadow */

  box-shadow: -20px -35px 50px rgba(21, 44, 91, 0.03), 0px 75px 80px rgba(21, 44, 91, 0.03),
    0px 31.3332px 33.4221px rgba(21, 44, 91, 0.0215656), 0px 16.7522px 17.869px rgba(21, 44, 91, 0.0178832),
    0px 9.39116px 10.0172px rgba(21, 44, 91, 0.015), 0px 4.98758px 5.32008px rgba(21, 44, 91, 0.0121168),
    0px 2.07544px 2.21381px rgba(21, 44, 91, 0.00843437);
  border-radius: 62px;
`

const ReservationSteps = ({ steps }) => {
  return (
    <Section mobile='0 20px ' tabletPadding='0 5.5%'>
      <SectionWork mobile='0 20px 48px' tabletPadding='103px 133px '>
        <Wrapper mobile='48px 0 16px' paddingTablet='0 0 18px '>
          <SectionTitle style={{ textAlign: 'center' }}>{steps[0].frontmatter.title_reservation}</SectionTitle>
        </Wrapper>
        {steps.map(({ frontmatter }, index) => {
          const { reservation_steps } = frontmatter
          const step = reservation_steps
          return step.map(({ frontmatter }, index) => {
            const {
              order,
              reservation_picture,
              reservation_picture_alt,
              short_description,
              subtitle_reservation,
            } = frontmatter

            return (
              <>
                <ReservationStep
                  order={order}
                  index={index}
                  description={short_description}
                  title={subtitle_reservation}
                  alt={reservation_picture_alt}
                  image={reservation_picture}
                />
                {index % 2 && index < step.length - 1 ? (
                  <NounArrow isArrowDownLeft={true} />
                ) : index == step.length - 1 ? (
                  ''
                ) : (
                  <NounArrow isArrowDownRight={true} />
                )}
              </>
            )
          })
        })}
      </SectionWork>
      <Boat isRiverTop={true} />
      <Bird />
    </Section>
  )
}

export default ReservationSteps
