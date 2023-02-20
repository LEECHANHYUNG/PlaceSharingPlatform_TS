import styled from 'styled-components';
export interface SharedProps {
  className?: string;
  children?: any;
}
export const Header = styled.header`
  background: #fff;
  width: 100%;
  height: 80px;
  padding: 10px 20px;
  border-bottom: 1px solid var(--color-main);
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    display: flex;
    width: 40%;
  }
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
  nav {
    width: 20%;
    min-width: 310px;
    height: 100%;
    float: right;
    height: 100%;
  }
  nav ul {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  nav ul li a {
    width: 100%;
    text-align: center;
  }
  nav ul li:nth-child(2) {
    margin: 0 20px;
    width: 10px;
  }
`;
export const CardWrapper = styled.div<SharedProps>`
  margin: 1rem auto;
  border-radius: 6px;
  background-color: white;
  padding: 1rem;
  width: 90%;
  max-width: 80rem;
  &.current-reservation-data {
    border: 4px solid #6a9eff;
    width: 70%;
  }
  @media screen and (max-width: 1170px) {
    width: 80%;
  }
  @media screen and (max-width: 858px) {
    &.current-reservation-data {
      width: 70%;
    }
  }
`;
export const Button = styled.button`
  background: #6a9eff;
  width: 150px;
  height: 30px;
  border-radius: 6px;
  position: absolute;
  top: 194px;
  left: 37.5%;
  transform: translateX(-37.5%);
  z-index: 10;
  cursor: pointer;
  font-weight: 900;
  font-size: 1rem;
  @media screen and (max-width: 1170px) {
    left: 50%;
    transform: translateX(-50%);
    top: 180px;
  }
`;
export const AuthHeaderWrapper = styled.a`
  color: #111;
  text-decoration: none;
  font-weight: 900;
  text-align: center;

  h1 {
    font-size: 30px;
    cursor: pointer;
  }
`;
export const InputWrapper = styled.input`
  width: 100%;
  height: 40px;
  margin: 10px auto;

  &.invalid {
    border-color: red;
    background: #fbdada;
  }
  &.invalid:focus {
    outline: none;
    border-color: #4f005f;
    background: #f6dbfc;
  }
`;

export const EmailWrapper = styled.div`
  width: 100%;
`;
