import React, { useEffect } from 'react'
import Page from '../layout/Page'
import styled from 'styled-components'

export default function Statute() {
  return (
    <Page>
      <h1>Regulaminy</h1>
      <a href={`Regulamin-kajaków.odt`} download>
        Download the file that is already in your static folder
      </a>
      <div>
        <a href={`Regulamin-kajaków.odt`} download>
          Download the file that is already in your static folder
        </a>
      </div>
    </Page>
  )
}
