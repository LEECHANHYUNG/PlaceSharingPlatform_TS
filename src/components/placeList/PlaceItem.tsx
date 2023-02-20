import React from 'react';
import { Place } from '../../pages';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import { placeListActions } from '../../store/placeList';
import { PlaceItemWrapper } from '../styled/mainPageStyled';

const PlaceItem = ({ placeInfo }: { placeInfo: Place }) => {
  const dispatch = useAppDispatch();
  const map = useAppSelector((state) => state.mapReducer.map);

  const selectPlace = () => {
    dispatch(placeListActions.setSelectedPlace(placeInfo));
    const selectedPlaceAddress: string = placeInfo.address;
    const geocoder = new kakao.maps.services.Geocoder();

    geocoder.addressSearch(selectedPlaceAddress, (result, status) => {
      if (status === kakao.maps.services.Status.OK && map) {
        const coords = new kakao.maps.LatLng(+result[0].y, +result[0].x);
        map.setLevel(3);
        map.panTo(coords);
      }
    });
  };

  return (
    <PlaceItemWrapper>
      <div onClick={selectPlace} className="container">
        <div id={placeInfo.placeId}>
          <div className="name">{placeInfo.placeName}</div>
          <div className="address">{placeInfo.address}</div>
          <div className="option">
            {placeInfo.placeDescription?.slice(0, 50)}
          </div>
        </div>
        <div className="line"></div>
      </div>
    </PlaceItemWrapper>
  );
};

export default PlaceItem;
