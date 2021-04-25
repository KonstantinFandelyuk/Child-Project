import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.scss';
import SwiperCore, { Thumbs } from 'swiper/core';
import { SliderBlock } from './style';

export const Slider = ({ images }) => {
  SwiperCore.use([Thumbs]);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <SliderBlock>
      <Swiper thumbs={{ swiper: thumbsSwiper }} className="sliderTop">
        {images &&
          images.map(({ id, img }) => (
            <SwiperSlide key={id}>
              <img src={img} alt="" />
            </SwiperSlide>
          ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        watchSlidesVisibility
        watchSlidesProgress
        spaceBetween={10}
        slidesPerView={3}
        className="sliderBottom"
      >
        {images &&
          images.map(({ id, img }) => (
            <SwiperSlide key={id}>
              <img src={img} alt="" />
            </SwiperSlide>
          ))}
      </Swiper>
    </SliderBlock>
  );
};
