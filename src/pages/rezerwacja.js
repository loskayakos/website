import React from 'react'
import Page from '../layout/Page'
import styled from 'styled-components'
import { Section } from '../componets/shared/Index.styled'
import variables from '../styles/variables'

const BookeroSection = styled(Section)`
  && .bookero-plugin-header {
    background: ${variables.color.headerButton};
  }
  && .submit-section .submit-button[data-v-78854db5] {
    background: ${variables.color.headerButton};
    width: max-content;
    height: 51px;
    font-family: Manrope;
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 150%;
    background: rgb(82, 120, 44);
    border-radius: 24px;
    border: 2px solid transparent;
    color: rgb(248, 249, 250);
    transition: transform 0.5s cubic-bezier(0.345, 0.24, 0.07, 1) 0s;
  }
  && .submit-section .submit-button[data-v-78854db5]:active,
  .submit-section .submit-button[data-v-78854db5]:focus,
  .submit-section .submit-button[data-v-78854db5] {
    &:hover {
      background: rgb(255, 255, 255);
      color: ${variables.color.headerButton};
      border: 2px solid ${variables.color.headerButton};
      &::after {
        border: 2px solid ${variables.color.headerButton};
        border-left: none;
        border-bottom: none;
      }
    }
  }
  && .inquiry-actions-details {
    color: ${variables.color.headerButton};
    &::after {
      border-top: 2px solid ${variables.color.headerButton};
      border-right: 2px solid ${variables.color.headerButton};
    }
  }
  && .people-number-wrapper .people-number-minus[data-v-ae96d084],
  .people-section .people-number-wrapper .people-number-plus[data-v-ae96d084] {
    &:hover {
      color: ${variables.color.headerButton};
    }
  }
  && .submit-section .back-button[data-v-78854db5]:active,
  .submit-section .back-button[data-v-78854db5]:focus,
  .submit-section .back-button[data-v-78854db5] {
    &:hover {
      color: ${variables.color.headerButton};
    }
  }
`
export default function Rezervation() {
  return (
    <Page>
      <BookeroSection>
        {/* <div id='bookero'></div> */}
        <script
          type='text/javascript'
          dangerouslySetInnerHTML={{
            __html: `var bookero_config = {
      id: "zgInGhVZL3Mw",
      container: "bookero",
      type: "standard",
      position: "",
      plugin_css: true,
      lang: "pl"
    };
  
    (function() {
    var d = document, s = d.createElement("script");
    s.src = "https://cdn.bookero.pl/plugin/v2/js/bookero-compiled.js";
    d.body.appendChild(s);
    })();`,
          }}
        />
      </BookeroSection>
    </Page>
  )
}
