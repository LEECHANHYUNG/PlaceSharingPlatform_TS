import React from 'react';
import styled from 'styled-components';
import { PlaceAvailableWrapper } from '../../styled/PlaceDetail';
import Desk from './item/Desk';
import MeetingRoom from './item/MeetingRoom';
import Office from './item/Office';
import { IPlaceAvailableItem } from './PlaceDetail';

const PlaceAvailableItem = ({
  roomInfo,
}: {
  roomInfo: IPlaceAvailableItem;
}) => {
  return (
    <PlaceAvailableWrapper>
      <h1>이용 가능 상품</h1>
      {roomInfo.DESK && <Desk price={roomInfo.DESK} />}
      {roomInfo.MEETINGROOM && <MeetingRoom price={roomInfo.MEETINGROOM} />}
      {roomInfo.OFFICE && <Office price={roomInfo.OFFICE} />}
    </PlaceAvailableWrapper>
  );
};

export default PlaceAvailableItem;
