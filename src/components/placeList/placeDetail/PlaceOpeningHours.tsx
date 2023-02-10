import React from 'react';
import { PlaceOpeningHoursWrapper } from '../../styled/PlaceDetail';
import { IPlaceOpeningHours } from './PlaceDetail';
interface Days {
  [key: string]: string;
}
const days: Days = {
  Mon: '월',
  Tue: '화',
  Wed: '수',
  Thu: '목',
  Fri: '금',
  Sat: '토',
  Sun: '일',
};
const PlaceOpeningHours = ({
  placeOpeningHours,
}: {
  placeOpeningHours: IPlaceOpeningHours;
}) => {
  const getClosedDay = () => {
    const closedDayKor = placeOpeningHours.closedDays.map((day) => days[day]);
    return closedDayKor.length
      ? `매주 ${closedDayKor.join(',')} 휴무`
      : '휴무일 없음';
  };
  return (
    <PlaceOpeningHoursWrapper main={placeOpeningHours.main}>
      <h1>영업 시간</h1>
      <div className="time">
        <div className="open">
          <p>오픈 시간</p>
          <div>{placeOpeningHours.openTime}</div>
        </div>
        <div>~</div>
        <div className="close">
          <p>마감 시간</p>
          <div>{placeOpeningHours.closeTime}</div>
        </div>
        <div className="info">
          <div className="closed-days">※ {getClosedDay()}</div>
          <div className="description">※ 사무실 연중무휴</div>
        </div>
      </div>
      {placeOpeningHours.main ? '' : <div className="line"></div>}
    </PlaceOpeningHoursWrapper>
  );
};

export default PlaceOpeningHours;
