import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards, Mousewheel, Keyboard } from 'swiper/modules';
import SwiperCore from 'swiper';

SwiperCore.use([EffectCards, Mousewheel, Keyboard]);

const swiperStyle = {
  width: '240px',
  height: '320px'
};

export default function Cards({ image, text }) {
  return (
    <Swiper
      effect={'cards'}
      grabCursor={true}
      modules={[EffectCards]}
      className="mySwiper"
      keyboard={true}
      style={swiperStyle}
    >
      <SwiperSlide style={{ background: `url(${image})` }}></SwiperSlide>
      <SwiperSlide>{text}</SwiperSlide>
    </Swiper>
  );
}
