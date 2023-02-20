import axios from 'axios';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import { PlaceMainWrapper } from '../../components/styled/PlaceMainStyled';
import { getPlaceIdList } from '../../lib/getPlaceIdList';

const PlaceMainPage = ({ place }: { place: any }) => {
  return (
    <PlaceMainWrapper>
      {/*<PlaceInfo
        placeName={place.placeMainInfo.placeName}
        address={place.placeMainInfo.address}
        rating={place.placeMainInfo.ratePoint}
        reviewQuantity={place.placeMainInfo.reviewQuantity}
        main={true}
      />*/}
      {/*<PlaceMainImage images={place.placeMainInfo.placeImage} />*/}
      <div className="line"></div>
      <section>
        <div className="info-left">
          {/*<PlaceItemCount
            placeName={place.placeMainInfo.placeName}
            itemCount={[
              place.placeMainInfo.deskQuantity,
              place.placeMainInfo.meetingRoomQuantity,
              place.placeMainInfo.officeQuantity,
            ]}
          />*/}
          {/* <PlaceDescription
            description={place.placeMainInfo.placeDescription}
          />*/}
          {/*<PlaceOpeningHours
            closedDays={place.placeMainInfo.placeCloseDays}
            openTime={place.placeMainInfo.placeOpenTime}
            closeTime={place.placeMainInfo.placeCloseTime}
            main={true}
          />*/}
          {/*<PlaceAdditional
            additionalItem={place.placeMainInfo.placeMainInfo}
            main={true}
          />*/}
          {/*<PlaceAround placeSubInfo={place.placeSubInfo} />
          <ItemListForm items={place.placeMainInfo.roomTypeResponse} />*/}
        </div>
        <div className="info-right">{/* <ReservationForm />*/}</div>
        <div className="info-bottom">
          {/*  <Review
            rating={place.placeMainInfo.ratePoint}
            count={place.placeMainInfo.reviewQuantity}
            ratingList={place.placeMainInfo.ratingList}
          />*/}
        </div>
      </section>
    </PlaceMainWrapper>
  );
};

export async function getStaticProps({ params }: any) {
  const placeId = params.id;

  try {
    const response = await axios({
      url: `${process.env.serverURL}places/${placeId}`,
    });
    if (response.status === 200) {
      return {
        props: {
          place: response.data,
        },
      };
    } else {
      throw new Error(response.data);
    }
  } catch (error) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
}
export const getStaticPaths: GetStaticPaths = async () => {
  const placeIdList = await getPlaceIdList();
  const paths = placeIdList.map((Id: string) => ({
    params: { id: Id },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export default PlaceMainPage;
