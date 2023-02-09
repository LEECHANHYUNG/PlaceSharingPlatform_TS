import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import { placeListActions } from '../../store/placeList';
import { PlaceItemWrapper } from '../styled/mainPageStyled';

const PlaceItem = ({ placeId }: { placeId: string }) => {
  const dispatch = useAppDispatch();
  const map = useAppSelector((state) => state.map.map);

  const placeList = useAppSelector((state) => state.placeList.placeList);
  const selectPlace = () => {
    dispatch(placeListActions.setSelectedPlace(placeId));
    const selectedPlaceAddress: string = placeList[placeId].address;
    const geocoder = new kakao.maps.services.Geocoder();

    geocoder.addressSearch(selectedPlaceAddress, (result, status) => {
      if (status === kakao.maps.services.Status.OK && map) {
        const coords = new kakao.maps.LatLng(+result[0].y, +result[0].x);
        map.setLevel(9);
        map.panTo(coords);
      }
    });
  };

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
