import React, { Fragment } from 'react';
import { useAppSelector } from '../../store/hook';
import PlaceItem from './PlaceItem';
const PlaceList = (): React.ReactElement => {
  const placeList = useAppSelector(
    (state) => state.placeList.filteredPlaceList
  );

  return (
    <Fragment>
      {Object.keys(placeList).map((elem: string) => (
        <PlaceItem placeInfo={placeList[elem]} key={placeList[elem].placeId} />
      ))}
    </Fragment>
  );
};

export default PlaceList;
