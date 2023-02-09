import styled from 'styled-components';

export const PlaceDetailWrapper = styled.section`
  position: relative;
  right: 0px;
  height: 100vh;
  width: 100%;
  overflow-y: scroll;
  .prev-btn {
    z-index: 10;
    position: absolute;
    width: 36px;
    height: 36px;
    top : 0px;
    left : 0px;
    cursor: pointer;
    
  }
  .detail-btn {
    position: fixed;
    bottom: 0px;
    right :0px;
    width: 24%;
    height: 40px;
    cursor: pointer;
    text-align: center;
    line-height: 40px;
    background: #111;
    color: #fff;
    z-index : 1000;
  }
 
  .line {
    height: 6px;
    background #999;
  }

  @media screen and (max-width: 1170px) {
    top: 60vh;
    width: 100%;
    height: 36vh;
    padding-top : 0;
    &::-webkit-scrollbar {
      display: none;
    }
     .prev-btn {
      top : 56px;
    }

     .detail-btn {
      width: 100%;
    }
  }
`;
