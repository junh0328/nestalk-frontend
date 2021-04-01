import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`


  
  ${reset}

  html, body, #__next{
    height: 100%;
  }

  * {
    font-family: 'NanumSquare', sans-serif !important;
  }
`;

export default GlobalStyle;
