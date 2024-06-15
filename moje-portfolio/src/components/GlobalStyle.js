import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;  /* Skrytí horizontálního scroll baru */
  }

  * {
    box-sizing: border-box;
  }

  /* Skrytí scrollbarů, ale zachování možnosti posouvání */
  body::-webkit-scrollbar {
    width: 0.5em;
    height: 0.5em;
    background-color: transparent;
  }
  body::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
`;

export default GlobalStyle;
