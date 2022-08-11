import { createGlobalStyle } from 'styled-components';
import  theme from './theme'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    min-height: 100% !important;
    height: 100vh;
    background: ${theme.backgroudColor};
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  }
`;
 
export default GlobalStyle;