import React from 'react';
import { Map } from 'react-kakao-maps-sdk';
import { MapContainer } from '../styled/mainPageStyled';
const KaKaoMap = (): JSX.Element => {
  return (
    <MapContainer>
      <Map
        center={{
          lat: 37.56681969769621,
          lng: 126.97865226010863,
        }}
        style={{ width: '100%', height: '100%' }}
      ></Map>
    </MapContainer>
  );
};

export default KaKaoMap;
