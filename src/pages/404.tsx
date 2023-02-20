import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  background: #fff;
  padding-top: 10%;
  font-size: 1rem;
  margin: 0;
`;

const PageNotFound = () => {
  return (
    <Wrapper>
      <h1>404</h1>
      <h1>Not Found Page</h1>
    </Wrapper>
  );
};

export default PageNotFound;
