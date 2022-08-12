import { createGlobalStyle } from 'styled-components';
import  theme from './theme'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    min-height: 100% !important;
    height: 100%;
    background: ${props => props.switch ? theme.backgroudColorWhite : theme.backgroudColorDark};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;
 
export default GlobalStyle;