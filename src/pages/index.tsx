import React, { Fragment } from 'react';
import KaKaoMap from '../components/map/KaKaoMap';
import KeyWordSearch from '../components/search/KeyWordSearch';
import {
  MapContainer,
  PlaceListWrapper,
} from '../components/styled/mainPageStyled';

const MainPage = () => {
  return (
    <Fragment>
      <KaKaoMap />
      <PlaceListWrapper>
        <KeyWordSearch />
      </PlaceListWrapper>
    </Fragment>
  );
};

export default MainPage;
