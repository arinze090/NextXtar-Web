import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    font-family: "Plus Jakarta Sans", sans-serif; 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }
`;

export default GlobalStyles;
