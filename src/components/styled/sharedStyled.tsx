import styled from 'styled-components';

export const Header = styled.header`
  background: #fff;
  width: 100%;
  height: 80px;
  padding: 10px 20px;
  border-bottom: 1px solid var(--color-main);
  margin: auto;

  .logo {
    width: 50%;
    height: 100%;
    float: left;
    display: flex;
    align-items: center;
    justify-content: start;
  }
  .logo h2 {
    margin-left: 10px;
  }
  .nav {
    width: 50%;
    height: 100%;
    float: right;
  }
  nav {
    height: 100%;
  }
  .nav nav ul {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
  }
  .nav nav ul li:nth-child(2) {
    margin: 0 20px;
  }
`;
