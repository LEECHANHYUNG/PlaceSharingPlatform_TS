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
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--color-main);
    border-radius: 10px;
  }
  a{
    cursor : pointer;
  }
  .wrap {
    height: 100px;
    width: 120px;
  }
  .custom-overlay {
    background: #111;
    color: #fff;
    height: 35%;
    border-radius: 30px;
    padding: 5px 20px;
    text-align: center;
    border: 3px solid var(--color-main);
    position: absolute;
    top: 0px;
    cursor: pointer;
    line-height: 100%;
    z-index: 10;
  }
  .arrow {
    background: #111;
    border: 3px solid var(--color-main);
    border-bottom: none;
    border-left: none;
    width: 12px;
    height: 12px;
    position: absolute;
    top: 28px;
    left: 54px;
    transform: rotate(135deg);
    z-index: 10;
    cursor: pointer;
  }
  
`;
export default GlobalStyle;
