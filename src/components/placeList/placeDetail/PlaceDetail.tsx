import React from 'react';
import { Place } from '../../../pages';
import { useAppDispatch } from '../../../store/hook';
import { placeListActions } from '../../../store/placeList';
import { PlaceDetailWrapper } from '../../styled/PlaceDetail';
import ArrowLeft from '../../../../public/svg/arrow-left.svg';
import Link from 'next/link';

const PlaceDetail = ({ place }: { place: Place }) => {
  const dispatch = useAppDispatch();
  const prevBtnHandler = () => {
    dispatch(placeListActions.setSelectedPlace(null));
  };

  return (
    <PlaceDetailWrapper>
      <div className="container">
        <div className="prev-btn" onClick={prevBtnHandler}>
          <ArrowLeft />
        </div>
      </div>
      <Link href={`/place/${place.placeId}`}>
        <div className="detail-btn">자세히 보기</div>
      </Link>
    </PlaceDetailWrapper>
  );
};

export default PlaceDetail;
