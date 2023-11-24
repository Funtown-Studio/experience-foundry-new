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

export default function Cards({ image, text, subtitle, desc, button }) {
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
      <SwiperSlide className='swiper-slide2'>
        <div>
          <h5 className="text-style">{text}</h5>
          <h6 className="subtitle-style">{subtitle}</h6>
          <p className="desc-style">{desc}</p>
          <button className="button-style">{button}</button>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
