import { AxiosResponse } from 'axios';
import React, { Fragment } from 'react';
import KaKaoMap from '../components/map/KaKaoMap';
import PlaceDetail from '../components/placeList/placeDetail/PlaceDetail';
import PlaceList from '../components/placeList/PlaceList';
import KeyWordSearch from '../components/search/KeyWordSearch';
import { PlaceListWrapper } from '../components/styled/mainPageStyled';
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
    DESK: string;
    MEETINGROOM: string;
    OFFICE: string;
  };
}
export interface PlaceList {
  [index: string]: Place;
}
interface Props {
  props: {
    placeList: PlaceList;
  };
  revalidate: number;
}

const MainPage = ({ placeList }: PlaceList) => {
  const dispatch = useAppDispatch();
  const selectedPlaceInfo = useAppSelector(
    (state) => state.placeList.selectedPlaceInfo
  );
  dispatch(placeListActions.getPlaceList(placeList));

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
    </Fragment>
  );
};

export async function getStaticProps(): Promise<Props> {
  let placeList: PlaceList = {};

  const response: AxiosResponse = await AxiosService.instance.get('/main');
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
