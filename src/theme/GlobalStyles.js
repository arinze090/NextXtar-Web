import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'ClashDisplay';
    src: url('./fonts/ClashDisplay-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  body {
    font-family: 'ClashDisplay', sans-serif;
  }
`;

export default GlobalStyles;
