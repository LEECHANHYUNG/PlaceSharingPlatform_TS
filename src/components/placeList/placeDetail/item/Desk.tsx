import React from 'react';
import { PlaceDetailItemWrapper } from '../../../styled/PlaceDetail';

const Desk = ({ price }: { price: string }) => {
  return (
    <PlaceDetailItemWrapper>
      <div className="description">
        <h1>1인 데스크</h1>
        <p>1인이 이용하기에 적합한 상품입니다.</p>
      </div>
      <div className="price">
        1시간 {Number(price).toLocaleString('ko-KR')} ~
      </div>
    </PlaceDetailItemWrapper>
  );
};

export default Desk;
