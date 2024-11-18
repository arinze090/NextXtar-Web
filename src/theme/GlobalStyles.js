import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
    // src: url('./fonts/ClashDisplay-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  body {
    font-family: 'Montserrat', sans-serif;
  }
`;

export default GlobalStyles;
