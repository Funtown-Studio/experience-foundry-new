/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';

SwiperCore.use([Autoplay, Navigation]);

const WhoWeWorkWith = () => {
    const data = [
        {
            title: "/assets/imgs/page/home/advent-health.png",
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
        },
        {
            title: "/assets/imgs/page/home/att.png",
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
        },
        {
            title: "/assets/imgs/page/home/bank-of-america.png",
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
        },
        {
            title: "/assets/imgs/page/home/del.png",
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
        },
    ];

    return (
        <>
            <div className="box-swiper">
                <div className="swiper-container swiper-group-1">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={0}
                        loop={true}
                        loopedSlides={2}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false
                        }}
                        navigation={{
                            prevEl: ".swiper-button-prev-4",
                            nextEl: ".swiper-button-next-4",
                        }}
                        className="swiper-wrapper pb-70 pt-5"
                    >
                        {data.map((item, i) => (
                            <SwiperSlide key={i}>
                                <div className="swiper-slide active mt-50">
                                    <div className="row">
                                        <div className="col-lg-10 col-md-6 col-sm-6">
                                            <div className="card-grid-style-5 hover-up vertical-line">
                                                <img src={item.title} alt="who-wework-with" />
                                                <p className="text-body-excerpt text-desc mt-15 mb-20">{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    );
};

export default WhoWeWorkWith;
