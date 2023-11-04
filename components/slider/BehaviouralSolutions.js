/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';

SwiperCore.use([Autoplay, Navigation]);
const BehaviouralSolutions = () => {

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
                <div className="swiper-container swiper-group-1">
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
                            <SwiperSlide>
                                <div className="swiper-slide active mt-50">
                                    <div className="row">
                                        <div className="col-lg-3 col-md-6 col-sm-6">
                                            <div className="card-grid-style-5 hover-up vertical-line">
                                                <h3 className="text-heading-5 mb-5 mt-5">Research</h3>
                                                <p className="text-body-excerpt text-desc color-gray-500 mt-15 mb-20">Behavioral analytics is used to gather user 
                                                insights, track interactions, and identify patterns, guiding data-driven product design decisions.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-6">
                                            <div className="card-grid-style-5 hover-up vertical-line">
                                                <h3 className="text-heading-5 mb-5 mt-5">Mapping</h3>
                                                <p className="text-body-excerpt text-desc color-gray-500 mt-15 mb-20">Designers create user journey maps based on 
                                                behavioral analytics, visualizing touchpoints and pain points to craft intuitive and user-centric product experiences.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-6">
                                            <div className="card-grid-style-5 hover-up vertical-line">
                                                <h3 className="text-heading-5 mb-5 mt-5">Testing</h3>
                                                <p className="text-body-excerpt text-desc color-gray-500 mt-15 mb-20">A/B tests and usability studies driven by 
                                                behavioral analytics validate design assumptions, ensuring iterative improvements that meet user needs effectively.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-6 col-sm-6">
                                            <div className="card-grid-style-5 hover-up vertical-line">
                                                <h3 className="text-heading-5 mb-5 mt-5">Working</h3>
                                                <p className="text-body-excerpt text-desc color-gray-500 mt-15 mb-20">Behavioral analytics continuously informs the fine-tuning 
                                                of user interfaces and interactions, resulting in a data-driven, user-centric product design process.</p>
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

export default BehaviouralSolutions;

