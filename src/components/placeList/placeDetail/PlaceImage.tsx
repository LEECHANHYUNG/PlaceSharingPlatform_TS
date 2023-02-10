import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper';
import { PlaceImageWrapper, StyledSwiper } from '../../styled/PlaceDetail';

const Wrapper = styled.div`
  width: 100%;
  height: 400px;
  margin: auto;
  position: relative;
  margin-top: 50px;
  .img {
    height: 100%;
  }
  .left,
  .right {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    font-size: 3rem;
    color: #fff;
    cursor: pointer;
  }
  .right {
    right: 10px;
    color: #111;
  }
  .left {
    left: 10px;
    color: #111;
  }
`;
const PlaceImage = ({ images }: { images: string[] }) => {
  return (
    <PlaceImageWrapper>
      <StyledSwiper navigation={true} modules={[Navigation]} draggable={false}>
        {images.map((image) => (
          <SwiperSlide className="swiper-slide" key={image}>
            <Image
              src={image}
              alt="공간 이미지"
              fill
              style={{
                objectFit: 'cover',
              }}
              sizes="100%"
              className="img"
              priority
            />
          </SwiperSlide>
        ))}
      </StyledSwiper>
    </PlaceImageWrapper>
  );
};

export default PlaceImage;
