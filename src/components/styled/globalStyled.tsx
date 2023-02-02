import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root{
   --color-main : #6a9eff ;
  }
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    list-style : none;
    text-decoration : none;
    color : #111;
  }
  a{
    cursor : pointer;
  }
`;
export default GlobalStyle;
