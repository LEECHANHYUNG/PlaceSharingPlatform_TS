import React, { useEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import { Place } from '../../pages';
import { placeListActions } from '../../store/placeList';

interface MarkerInterface {
  createMarker(elem: Place, map: any): void;
  setMapCenterPosition(e: MouseEvent, address: string, map: any): void;
}
const MapMarker = () => {
  const dispatch = useAppDispatch();
  const marker = useAppSelector((state) => state.placeListReducer.marker);
  const map = useAppSelector((state) => state.mapReducer.map);
  const placeList = useAppSelector(
    (state) => state.placeListReducer.filteredPlaceList
  );

  useEffect(() => {
    marker.map((elem) => {
      elem.parentNode.remove();
    });
    dispatch(placeListActions.resetMarker());

    kakao.maps.load(() => {
      class Marker implements MarkerInterface {
        createMarker(elem: Place, map: any): void {
          const content = document.createElement('div');
          content.classList.add('wrap');
          const overlay = document.createElement('div');
          overlay.textContent = elem.placeName;
          overlay.classList.add('custom-overlay');
          overlay.setAttribute('id', elem.placeId);
          const arrow = document.createElement('div');
          arrow.classList.add('arrow');
          arrow.setAttribute('id', elem.placeId);
          content.appendChild(overlay);
          content.appendChild(arrow);
          overlay.addEventListener('click', (e): void => {
            dispatch(placeListActions.setSelectedPlace(elem));

            this.setMapCenterPosition(e, elem.address, map);
          });
          const geocoder = new kakao.maps.services.Geocoder();
          geocoder.addressSearch(elem.address, (result: any, status: any) => {
            if (status === kakao.maps.services.Status.OK) {
              const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
              const overlay = new kakao.maps.CustomOverlay({
                content,
                map: map,
                position: coords,
              });
              bounds.extend(coords);
              this.setBound(bounds);

              return overlay;
            }
          });
          dispatch(placeListActions.getMarker(overlay));
        }
        setMapCenterPosition(e: MouseEvent, address: string, map: any): void {
          e.stopPropagation();
          const geocoder = new kakao.maps.services.Geocoder();
          geocoder.addressSearch(address, (result, status) => {
            if (status === kakao.maps.services.Status.OK) {
              const coords = new kakao.maps.LatLng(+result[0].y, +result[0].x);
              map.panTo(coords);
            }
          });
          return;
        }
        setBound(bounds: any) {
          map?.setBounds(bounds, 20, 0, 0, 100);
        }
      }
      const bounds = new kakao.maps.LatLngBounds();
      const marker = new Marker();
      for (const key in placeList) {
        marker.createMarker(placeList[+key], map);
      }
    });
  }, [map, placeList, dispatch]);

  return <></>;
};

export default MapMarker;
