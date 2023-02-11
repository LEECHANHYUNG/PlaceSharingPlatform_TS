import React, { Fragment } from 'react';
import { useAppSelector } from '../../store/hook';
import { NoPlaceWrapper } from '../styled/mainPageStyled';
import PlaceItem from './PlaceItem';
const PlaceList = (): React.ReactElement => {
  const placeList = useAppSelector(
    (state) => state.placeList.filteredPlaceList
  );

  return (
    <Fragment>
      {Object.keys(placeList).length ? (
        Object.keys(placeList).map((elem: string) => (
          <PlaceItem
            placeInfo={placeList[elem]}
            key={placeList[elem].placeId}
          />
        ))
      ) : (
        <NoPlaceWrapper>검색된 공간이 없습니다.</NoPlaceWrapper>
      )}
    </Fragment>
  );
};

export default PlaceList;
