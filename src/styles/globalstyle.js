import { createGlobalStyle } from 'styled-components'
import '../../static/fonts/fonts.css'

export const GlobalStyle = createGlobalStyle` 
:root {
    --black: #000000;
}
&& body {
    font-family: 'Manrope', sans-serif;
    font-weight:400 ;
    color: var(--black);
    & .flex {
        display:flex ;
    }
   
}
`