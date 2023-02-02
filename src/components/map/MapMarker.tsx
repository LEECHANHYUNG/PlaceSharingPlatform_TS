import React, { useEffect } from 'react';
import { useAppSelector } from '../../store/hook';
import { Place } from '../../pages';
class Marker {
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
    content.addEventListener('click', (e) => this.setMapCenterPosition(e));
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
  setMapCenterPosition(e: MouseEvent): void {
    const selectedPlaceId = e.target;
  }
}
const MapMarker = () => {
  const map = useAppSelector((state) => state.map.map);
  const marker = new Marker();
  const placeList = useAppSelector((state) => state.placeList.placeList);
  useEffect(() => {
    kakao.maps.load(() => {
      for (const key in placeList) {
        marker.createMarker(placeList[key], map);
      }
    });
  });
  return <div></div>;
};

export default MapMarker;
