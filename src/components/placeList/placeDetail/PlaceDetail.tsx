import React from 'react';
import { Place } from '../../../pages';
import { useAppDispatch } from '../../../store/hook';
import { placeListActions } from '../../../store/placeList';
import ArrowLeft from '../../../../public/svg/arrow-left.svg';
import PlaceImage from './PlaceImage';
import PlaceInfo from './PlaceInfo';
import PlaceAdditional from './PlaceAdditional';
import PlaceOpeningHours from './PlaceOpeningHours';
import PlaceAvailableItem from './PlaceAvailableItem';
import { PlaceDetailWrapper } from '../../styled/PlaceDetail';
import Link from 'next/link';
export interface IPlaceInfo {
  placeName: string;
  description?: string;
  address: string;
  rating: string;
  reviewQuantity: string;
  main: boolean;
}
export interface IPlaceAdditional {
  additionalItem: string[];
  main: boolean;
}
export interface IPlaceOpeningHours {
  openTime: string;
  closeTime: string;
  closedDays: string[];
  main: boolean;
}
export interface IPlaceAvailableItem {
  DESK: string | undefined;
  MEETINGROOM: string | undefined;
  OFFICE: string | undefined;
}
const PlaceDetail = ({ place }: { place: Place }) => {
  const dispatch = useAppDispatch();
  const prevBtnHandler = () => {
    dispatch(placeListActions.setSelectedPlace(null));
  };
  const placeInfoData: IPlaceInfo = {
    placeName: place.placeName,
    description: place.placeDescription,
    address: place.address,
    rating: place.ratingPoint,
    reviewQuantity: place.reviewQuantity,
    main: false,
  };
  const placeAdditionalData: IPlaceAdditional = {
    additionalItem: place.placeInfo,
    main: false,
  };
  const PlaceOpeningHoursData: IPlaceOpeningHours = {
    openTime: place.openTime,
    closeTime: place.closeTime,
    closedDays: place.closeDays,
    main: false,
  };
  const placeAvailableData: IPlaceAvailableItem = {
    DESK: place.roomInfo.DESK,
    MEETINGROOM: place.roomInfo.MEETINGROOM,
    OFFICE: place.roomInfo.OFFICE,
  };

  return (
    <PlaceDetailWrapper>
      <div className="container">
        <div className="prev-btn" onClick={prevBtnHandler}>
          <ArrowLeft />
        </div>
        <PlaceImage images={place.placeImages} />
        <div className="line"></div>
        <PlaceInfo placeInfo={placeInfoData} />
        <PlaceAdditional placeAdditional={placeAdditionalData} />
        <PlaceOpeningHours placeOpeningHours={PlaceOpeningHoursData} />
        <PlaceAvailableItem roomInfo={placeAvailableData} />
      </div>
      <Link href={`/place/${place.placeId}`}>
        <div className="detail-btn">자세히 보기</div>
      </Link>
    </PlaceDetailWrapper>
  );
};

export default PlaceDetail;
