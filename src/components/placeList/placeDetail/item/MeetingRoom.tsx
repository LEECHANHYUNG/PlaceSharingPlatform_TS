import React from 'react';
import styled from 'styled-components';
import { PlaceDetailItemWrapper } from '../../../styled/PlaceDetail';

const MeetingRoom = ({ price }: { price: string }) => {
  return (
    <PlaceDetailItemWrapper>
      <div className="description">
        <h1>회의실</h1>
        <p>여러 인원이 사용할 수 있는 상품입니다.</p>
      </div>
      <div className="price">
        1시간 {Number(price).toLocaleString('ko-KR')} ~{' '}
      </div>
    </PlaceDetailItemWrapper>
  );
};

export default MeetingRoom;
