import Image from 'next/image';
import React from 'react';
import Star from '../../../../public/svg/star.svg';
import { PlaceInfoWrapper } from '../../styled/PlaceDetail';
import { IPlaceInfo } from './PlaceDetail';
const PlaceInfo = ({ placeInfo }: { placeInfo: IPlaceInfo }) => {
  return (
    <PlaceInfoWrapper main={placeInfo.main}>
      <div className="review">
        <div className="review-avg">
          <Star style={{ height: '16', width: '16' }} />
          <div>{`${placeInfo.rating}/5.0`}</div>
        </div>

        {!placeInfo.main ? (
          ''
        ) : (
          <a href="#review" className="review-count">
            리뷰 {placeInfo.reviewQuantity}개
          </a>
        )}
      </div>
      <div className="place-name">{placeInfo.placeName}</div>
      <div className="place-description">{placeInfo.description}</div>
      <div className="place-address">{placeInfo.address}</div>
      <div className="line"></div>
    </PlaceInfoWrapper>
  );
};

export default PlaceInfo;
