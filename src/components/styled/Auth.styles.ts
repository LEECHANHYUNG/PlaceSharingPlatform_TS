import styled from 'styled-components';

export const SigninWrapper = styled.div`
  margin: 20vh auto;
  padding: 1rem;
  width: 90%;
  max-width: 40rem;
  text-align: center;

  .signInForm form {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .control {
    width: 100%;
  }
  .control.invalid input {
    border-color: red;
    background: #fbdada;
  }
  .control.invalid input:focus {
    outline: none;
    border-color: #4f005f;
    background: #f6dbfc;
  }
  .signInForm form input {
    width: 80%;
    height: 40px;
    margin: 10px auto;
  }

  Button {
    width: 80%;
    margin-top: 20px;
  }
  .navLink {
    margin-top: 20px;
  }
  .navLink a {
    text-decoration: underline;
  }
  .validity-comment {
    text-align: left;
    margin-left: 60px;
    position: relative;
    top: 0px;
    left: 0px;
  }

  @media screen and (max-width: 858px) {
    .validity-comment {
      margin-left: 24px;
      font-size: 13px;
    }
  }
`;
