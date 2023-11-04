/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import React from 'react';
import { Autoplay, Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);
const Companies = () => {

    const data = [
        {
            img: "adventhealth.png",
            title: "Advent Health",
            text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
        },
        {
            img: "adventhealth.png",
            title: "Advent Health",
            text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
        },
        {
            img: "adventhealth.png",
            title: "Advent Health",
            text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
        }
    ];


    return (
        <>
            <div className="box-swiper">
                <div className="swiper-container swiper-group-4">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false
                        }}
                        navigation={{
                            prevEl: ".swiper-button-prev-5",
                            nextEl: ".swiper-button-next-5"
                        }}
                        className="swiper-wrapper pb-70 pt-5"
                    >
                        {data.map((item, i) => (
                            <SwiperSlide key="{item}">
                                <div className="swiper-slide">
                                    <div className="card-grid-style-2 hover-up">
                                        <div className="grid-2-img">
                                            <img src={`assets/imgs/page/home/${item.img}`} alt="Agon" />
                                        </div>
                                        <h3 className="text-heading-5 mt-20">{item.title}</h3>
                                        <p className="text-body-text color-gray-600 mt-20">{item.text}</p>
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

export default Companies;

