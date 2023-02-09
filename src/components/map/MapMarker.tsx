import React, { useEffect } from 'react';
import { useAppSelector } from '../../store/hook';
import { Place } from '../../pages';

interface MarkerInterface {
  createMarker(elem: Place, map: any): void;
  setMapCenterPosition(e: MouseEvent, address: string, map: any): void;
}

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

        return overlay;
      }
    });
  }
  setMapCenterPosition(e: MouseEvent, address: string, map: any): void {
    e.stopPropagation();
    const geocoder = new kakao.maps.services.Geocoder();
    geocoder.addressSearch(address, (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        const coords = new kakao.maps.LatLng(+result[0].y, +result[0].x);
        map.setLevel(4);
        map.panTo(coords);
      }
    });
    return;
  }
}
const MapMarker = () => {
  const map = useAppSelector((state) => state.map.map);
  const placeList = useAppSelector((state) => state.placeList.placeList);
  useEffect(() => {
    const marker = new Marker();
    kakao.maps.load(() => {
      for (const key in placeList) {
        marker.createMarker(placeList[key], map);
      }
    });
  }, [map, placeList]);

  return <></>;
};

export default MapMarker;
