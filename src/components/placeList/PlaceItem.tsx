import React from 'react';
import { Place } from '../../pages';
import { useAppSelector } from '../../store/hook';
import { PlaceItemWrapper } from '../styled/mainPageStyled';

const PlaceItem = ({ placeId }: { placeId: string }) => {
  const placeList = useAppSelector((state) => state.placeList.placeList);
  const selectPlace = () => {};
  return (
    <PlaceItemWrapper>
      <div onClick={selectPlace} className="container">
        <div id={placeId}>
          <div className="name">{placeList[placeId].placeName}</div>
          <div className="address">{placeList[placeId].address}</div>
          <div className="option">
            {placeList[placeId].placeDescription.slice(0, 50)}
          </div>
        </div>
        <div className="line"></div>
      </div>
    </PlaceItemWrapper>
  );
};

export default PlaceItem;
