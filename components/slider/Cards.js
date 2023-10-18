// Import Swiper React components
import { Swiper, SwiperSlide} from 'swiper/react';
import { EffectCards } from 'swiper';
// Import Swiper styles
import 'swiper/css';



export default () => {
  return (
    <Swiper
    
      effect='cards'
            slidesPerView={1}

            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>                                
                <img className="" src="assets/imgs/page/about/1/chilling-astronaut.png" alt="chilling-astronaut" />
            </SwiperSlide>
            <SwiperSlide>                                
                <img className="" src="assets/imgs/page/about/1/chilling-astronaut.png" alt="chilling-astronaut" />
            </SwiperSlide>

        </Swiper>
    );
};