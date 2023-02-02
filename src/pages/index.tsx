import axios, { AxiosResponse } from 'axios';
import React, { Fragment } from 'react';
import KaKaoMap from '../components/map/KaKaoMap';
import KeyWordSearch from '../components/search/KeyWordSearch';
import { PlaceListWrapper } from '../components/styled/mainPageStyled';
import AxiosService from '../service/axios.service';
interface Place {
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
  roomInfo: {
    DESK: string;
    MEETINGROOM: string;
    OFFICE: string;
  };
}
interface PlaceList {
  [index: string]: Place;
}
interface Props {
  props: {
    placeList: PlaceList;
  };
  revalidate: number;
}

const MainPage = ({ placeList }: PlaceList) => {
  console.log(placeList);
  return (
    <Fragment>
      <KaKaoMap />
      <PlaceListWrapper>
        <KeyWordSearch />
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
