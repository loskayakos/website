import { createGlobalStyle } from 'styled-components'
import '../../static/fonts/fonts.css'

export const GlobalStyle = createGlobalStyle` 
   *,
     ::after,
     ::before {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
     }
:root {
    --black: #000000;
}
&& body {
    font-family: 'Manrope', sans-serif;
    font-weight:400 ;
    color: var(--black);
  a{
      text-decoration:none ;
  }
   
}
`
