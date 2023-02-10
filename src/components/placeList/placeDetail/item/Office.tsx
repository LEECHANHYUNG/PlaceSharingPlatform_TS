import React from 'react';
import { PlaceDetailItemWrapper } from '../../../styled/PlaceDetail';

const Office = ({ price }: { price: string }) => {
  return (
    <PlaceDetailItemWrapper>
      <div className="description">
        <h1>사무실</h1>
        <p>장기간 대여 가능 상품입니다.</p>
      </div>
      <div className="price">
        1일 {Number(price).toLocaleString('ko-KR')} ~{' '}
      </div>
    </PlaceDetailItemWrapper>
  );
};

export default Office;
