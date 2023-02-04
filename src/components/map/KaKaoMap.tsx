import React, { SetStateAction, useEffect, useRef, useState } from 'react';
import { Map } from 'react-kakao-maps-sdk';
import { useAppDispatch } from '../../store/hook';
import { mapActions } from '../../store/map';
import { MapContainer } from '../styled/mainPageStyled';
import MapMarker from './MapMarker';
const KaKaoMap = (): JSX.Element => {
  const [map, setMap] = useState<SetStateAction<any>>();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(mapActions.getMap(map));
  });
  return (
    <MapContainer>
      <Map
        center={{
          lat: 37.56681969769621,
          lng: 126.97865226010863,
        }}
        level={10}
        onCreate={(map) => setMap(map)}
        style={{ width: '100%', height: '100%' }}
      ></Map>
      <MapMarker />
    </MapContainer>
  );
};

export default KaKaoMap;
