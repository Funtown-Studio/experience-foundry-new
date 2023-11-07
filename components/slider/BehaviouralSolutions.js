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
            title: "Research",
            description: "Behavioral analytics is used to gather user insights, track interactions, and identify patterns, guiding data-driven product design decisions."
        },
        {
            title: "Mapping",
            description: "Designers create user journey maps based on behavioral analytics, visualizing touchpoints and pain points to craft intuitive and user-centric product experiences."
        },
        {
            title: "Testing",
            description: "A/B tests and usability studies driven by behavioral analytics validate design assumptions, ensuring iterative improvements that meet user needs effectively."
        },
        {
            title: "Working",
            description: "Behavioral analytics continuously informs the fine-tuning of user interfaces and interactions, resulting in a data-driven, user-centric product design process."
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
                                                <h3 className="text-heading-5 mb-5 mt-5">{item.title}</h3>
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

export default BehaviouralSolutions;
