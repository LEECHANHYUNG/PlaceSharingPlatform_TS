import styled from 'styled-components';

export const PlaceMainWrapper = styled.section`
  width: 70vw;
  margin: auto;
  padding-top: 100px;
  position: relative;

  .line {
    height: 3px;
    background: #999;
    width: 60vw;
    margin: auto;
  }

  .info-left {
    width: 60%;
    float: left;
    transition: all 0.5s;
  }

  .info-right {
    position: relative;
    width: 35%;
    float: right;
  }

  @media screen and (max-width: 1170px) {
    width: 90vw;
    height: auto;
    .line {
      width: 90vw;
    }
    .info-left {
      width: 100%;
    }
    .info-right {
      width: 100%;
    }
    .info-bottom {
      position: relative;
      bottom: 0px;
      height: 0px;
    }
  }
`;
