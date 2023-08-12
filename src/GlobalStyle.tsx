import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    font-family: 'Kanit', sans-serif;
  }
  
  body {
    
    background: var(--gray-900);
    color: var(--white)
  }
  
  :root {

    --br: 8px;
    --pad: 20px;
    --gap: 10px;


    --gray-900: #080808;
    --gray-700: #181818;
    --gray-500: #1a1a1a;
    --gray-400: #242424;
    --gray-200: #282828;
    --gray-300: #a7a7a7;
    --gray: #121212;
    
    --blue: #2d00e5;

    --black: #000000;
    --white: #ffffff;
    
  }
  
`;
