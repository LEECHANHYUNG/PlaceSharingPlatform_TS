import Image from 'next/image';
import React from 'react';
import { PlaceAdditionalWrapper } from '../../styled/PlaceDetail';
import Wifi from '../../../../public/svg/wifi.svg';
import Car from '../../../../public/svg/car.svg';
import Coffee from '../../../../public/svg/coffee.svg';
import Monitor from '../../../../public/svg/monitor.svg';
import { IPlaceAdditional } from './PlaceDetail';

const PlaceAdditional = ({
  placeAdditional,
}: {
  placeAdditional: IPlaceAdditional;
}) => {
  return (
    <PlaceAdditionalWrapper main={placeAdditional.main}>
      <h1>부가 정보</h1>
      <main>
        {placeAdditional.additionalItem.includes('Parking') && (
          <div className="item">
            <Car />
            <p>주차 가능</p>
          </div>
        )}
        {placeAdditional.additionalItem.includes('Wifi') && (
          <div className="item">
            <Wifi />
            <p>와이파이</p>
          </div>
        )}
        {placeAdditional.additionalItem.includes('Coffee') && (
          <div className="item">
            <Coffee />
            <p>커피 머신</p>
          </div>
        )}
        {placeAdditional.additionalItem.includes('Monitor') && (
          <div className="item">
            <Monitor />
            <p>모니터</p>
          </div>
        )}
      </main>
      {placeAdditional.main ? '' : <div className="line"></div>}
    </PlaceAdditionalWrapper>
  );
};

export default PlaceAdditional;
