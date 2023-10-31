/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import Link from "next/link";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);
const DesignCases = () => {

    const data = [
        {
            img: "9.jpg",
            avatar: "1.jpg",
            title: "Liguid Wave",
            author: "Sound Box"
        },
        {
            img: "10.jpg",
            avatar: "2.jpg",
            title: "Liguid Wave",
            author: "Sound Box"
        },
        {
            img: "11.jpg",
            avatar: "3.jpg",
            title: "Liguid Wave",
            author: "Sound Box"
        },
        {
            img: "12.jpg",
            avatar: "4.jpg",
            title: "Liguid Wave",
            author: "Sound Box"
        },
    ];


    return (
        <>
            <div className="box-swiper">
                <div className="swiper-container swiper-group-1 mt-50">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
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
                                <div className="swiper-slide active">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-4 col-md-6 col-sm-6">
                                            <div className="card-grid-style-5 hover-up">
                                                <div className="grid-5-img mb-15">
                                                    <img src="/assets/imgs/page/about/1/team-1.png" className="img-border-radius" alt="Agon" />
                                                </div>
                                                <h2 className="text-heading-2 mb-5 mt-5">Investment Planning</h2>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-6">
                                            <div className="card-grid-style-5 hover-up">
                                                <div className="grid-5-img mb-15">
                                                    <img src="/assets/imgs/page/about/1/team-1.png" className="img-border-radius" alt="Agon" />
                                                </div>
                                                <h2 className="text-heading-2 mb-5 mt-5">Film Industry Project</h2>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-6">
                                            <div className="card-grid-style-5 hover-up">
                                                <div className="grid-5-img mb-15">
                                                    <img src="/assets/imgs/page/about/1/team-1.png" className="img-border-radius" alt="Agon" />
                                                </div>
                                                <h2 className="text-heading-2 mb-5 mt-5">NASA Innovation</h2>
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

export default DesignCases;

