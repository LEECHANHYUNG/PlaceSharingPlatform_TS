import styled from 'styled-components';
import { Swiper } from 'swiper/react';
import Card from '../layout/Card';
interface Props {
  main: boolean;
}
export const PlaceDetailWrapper = styled.section`
  position: relative;
  right: 0px;
  height:auto;
  width: 100%;
  padding-bottom : 40px;
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
export const StyledSwiper = styled(Swiper)`
  width: 100%;
  .swiper-slide {
    height: 360px;
  }
`;

export const PlaceImageWrapper = styled.div`
  width: 100%;
  height: 370px;
  position: relative;
  .img {
    height: 100%;
  }
  .left,
  .right {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    font-size: 3rem;
    color: #fff;
    cursor: pointer;
  }
  .right {
    right: 10px;
    color: #111;
  }
  .left {
    left: 10px;
    color: #111;
  }
`;
export const PlaceInfoWrapper = styled.section<Props>`
  margin : auto;
  .place-name {
    font-size: 1.7rem;
    font-weight: 900;
    margin-top: 20px;
    margin-left: 20px;
  }
  .place-description {
    display : ${(props) => (props.main ? 'none' : 'block')};
    margin-top: 30px;
    padding: 0 30px;
    color: #888;
  }
  .place-address {
    font-size: 1rem;
    padding: ${(props) => (props.main ? '10px' : '30px')} 30px;
  }
  .line {
    height: 6px;
    background #999;
  }
  .review-avg{
    position: relative;
    width : 80px;
    left : 20px;
    display: flex;
    margin-right : 10px;
  }
  .review-avg div{
    font-weight: 900;
    font-size : 0.9rem;
  }
  .review{
    padding-top : 20px;
    display : flex;
    justify-content: flex-start;
    align-items : center
    
  }
  .review-count{
    margin-left: 20px;
    font-size : 0.9rem;
    text-decoration: underline;
  }
`;
export const PlaceAdditionalWrapper = styled.section<Props>`
  width: 100%;
  margin-top: 30px;
  padding-bottom: ${(props) => (props.main ? '30px' : 'none')};
  border-bottom: ${(props) => (props.main ? '3px solid #999' : 'none')};
  svg {
    width: 36px;
    height: 36px;
  }
  h1 {
    font-size: ${(props) => (props.main ? '1.5rem' : '1rem')};
    padding: 0 ${(props) => (props.main ? '0' : '30px')};
  }
  main {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 10px;
    padding: 30px 30px;
    min-width: 300px;
  }
  .item {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 80px;
  }
  @media screen and (max-width: 1420px) {
    .item {
      padding-right: 30px;
    }
    .item p {
      display: none;
    }
  }
  @media screen and (max-width: 768px) {
  }
`;

export const PlaceOpeningHoursWrapper = styled.section<Props>`
width: 100%;
margin-top: ${(props) => (props.main ? '30px' : '20px')};
padding-bottom: ${(props) => (props.main ? '30px' : '0')};
border-bottom : ${(props) => (props.main ? '3px solid #999' : 'none')};
h1 {
  font-size: ${(props) => (props.main ? '1.5rem' : '1rem')};
  padding: 0 ${(props) => (props.main ? '0' : '1rem')};
}

.time {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
  padding: 0 30px;
}
.time p {
  font-size: 1rem;
  color: #6a9eff;
  font-weight: 900;
}
.open div,
.close div {
  font-size: 1.5rem;
  font-weight: 900;
}
.line {
  height: 6px;
  background #999;
  margin-top : 20px;
}

.info{
  
  font-size: 0.9rem;
  font-weight:  900;
  margin-top: 10px;
  color: #6a9eff;
}
.closed-days{
}

@media screen and (max-width: 768px){
  .time{
    padding: 0px;
  }
  .time p{
    font-size : 13px;
    width: 100%;
  }
  .info {
    margin-left: 20px;
    font-size: 11px;
  }
}
`;

export const PlaceDetailItemWrapper = styled(Card)`
  width: 90%;
  height: 80px;
  padding: 0 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
  padding: 10px;
  border: 2px solid #6a9eff;
  .description {
    width: 40%;
    font-size: 13px;
  }
  .description h1 {
    font-size: 1.3rem;
    padding: 0;
    margin-bottom: 5px;
  }
  .price {
    font-size: 1.3rem;
    color: #6a9eff;
  }
  @media screen and (max-width: 1430px) {
    .description p {
      display: none;
    }
  }
  @media screen and (max-width: 1170px) {
    .description p {
      display: block;
    }
  }
`;
export const PlaceAvailableWrapper = styled.section`
  width: 100%;
  margin-top: 20px;
  & h1 {
    padding: 0 30px;
    font-size: 1rem;
    font-weight: 900;
  }
`;
