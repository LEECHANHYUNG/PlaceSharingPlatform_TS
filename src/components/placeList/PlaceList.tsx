import React, { Fragment } from 'react';
import { useAppSelector } from '../../store/hook';
import PlaceItem from './PlaceItem';
const PlaceList = (): React.ReactElement => {
  const placeList = useAppSelector((state) => state.placeList.placeList);

  return (
    <Fragment>
      {Object.keys(placeList).map((elem: string) => (
        <PlaceItem placeId={elem} key={elem} />
      ))}
    </Fragment>
  );
};

export default PlaceList;