import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.scss';
import SwiperCore, { Thumbs } from 'swiper/core';
const shortid = require('shortid');
import { SliderBlock } from './style';

export const Slider = ({ images }) => {
  SwiperCore.use([Thumbs]);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const img = [
    'https://picsum.photos/id/237/800/500',
    'https://picsum.photos/id/217/800/500',
    'https://picsum.photos/id/255/800/500',
  ];
  return (
    <SliderBlock>
      <Swiper thumbs={{ swiper: thumbsSwiper }} className="sliderTop">
        {img.map((item) => (
          <SwiperSlide key={shortid.generate()}>
            <img src={item} alt="" />
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
        {img.map((item) => (
          <SwiperSlide key={shortid.generate()}>
            <img src={item} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderBlock>
  );
};
