import axios, { AxiosResponse } from 'axios';
import React, { Fragment, useEffect } from 'react';
import KaKaoMap from '../components/map/KaKaoMap';
import PlaceDetail from '../components/placeList/placeDetail/PlaceDetail';
import PlaceList from '../components/placeList/PlaceList';
import KeyWordSearch from '../components/search/KeyWordSearch';
import { PlaceListWrapper } from '../components/styled/mainPageStyled';
import { Button } from '../components/styled/sharedStyled';
import AxiosService from '../service/axios.service';
import { useAppDispatch, useAppSelector } from '../store/hook';
import { placeListActions } from '../store/placeList';
export interface Place {
  placeImages: string[];
  placeId: string;
  placeName: string;
  ratingPoint: string;
  address: string;
  placeInfo: string[];
  placeDescription: string;
  closeDays: string[];
  openTime: string;
  closeTime: string;
  reviewQuantity: string;
  roomInfo: {
    DESK: string | undefined;
    MEETINGROOM: string | undefined;
    OFFICE: string | undefined;
  };
}
export interface PlaceList {
  [index: number]: Place;
}
interface Props {
  props: {
    placeList: PlaceList;
  };
  revalidate: number;
}

const MainPage = ({ placeList }: any) => {
  const dispatch = useAppDispatch();
  const selectedPlaceInfo = useAppSelector(
    (state) => state.placeListReducer.selectedPlaceInfo
  );
  const isFiltered = useAppSelector(
    (state) => state.placeListReducer.isFiltered
  );
  dispatch(placeListActions.getPlaceList(placeList));
  const filterResetHandler = (): void => {
    dispatch(placeListActions.resetFilteredPlaceList());
  };
  useEffect(() => {
    dispatch(placeListActions.getFilteredPlaceList(placeList));
  }, []);

  return (
    <Fragment>
      <KaKaoMap />
      <PlaceListWrapper>
        <KeyWordSearch />
        {selectedPlaceInfo !== null ? (
          <PlaceDetail place={selectedPlaceInfo} />
        ) : (
          <PlaceList />
        )}
      </PlaceListWrapper>
      {isFiltered ? (
        <Button onClick={filterResetHandler}>검색 초기화</Button>
      ) : (
        ''
      )}
    </Fragment>
  );
};

export async function getStaticProps(): Promise<Props> {
  let placeList: PlaceList = {};

  const response: AxiosResponse = await axios.get(
    `${process.env.serverURL}main`
  );
  if (response.status === 200) {
    placeList = response.data;
  } else {
  }
  return {
    props: {
      placeList,
    },
    revalidate: 20,
  };
}
export default MainPage;
