/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import Link from "next/link";
import SwiperCore, { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);
const InnovationSolutions = () => {

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
                                        <div className="col-lg-4 col-md-6 col-sm-6">
                                            <div className="card-grid-style-5 hover-up vertical-line vertical-line-right">
                                                <h3 className="text-heading-5 mb-5 mt-5 innovation-slider-headings">Continuous </h3>
                                                <h3 className="text-heading-5 mb-5 mt-5 innovation-slider-headings">Insights</h3>

                                                <p className="text-body-excerpt text-desc color-gray-500 mt-15 mb-20">We constantly monitor industry trends, 
                                                market dynamics, and emerging technologies to ensure your strategies remain cutting-edge.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-6">
                                            <div className="card-grid-style-5 hover-up">
                                                <h3 className="text-heading-5 mb-5 mt-5 innovation-slider-headings">Customized </h3>
                                                <h3 className="text-heading-5 mb-5 mt-5 innovation-slider-headings">Solutions</h3>

                                                <p className="text-body-excerpt text-desc color-gray-500 mt-15 mb-20">Our approach is tailored to your 
                                                unique needs, ensuring that innovation aligns seamlessly with your business goals.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-6 col-sm-6">
                                            <div className="card-grid-style-5 hover-up vertical-line vertical-line-right">
                                                <h3 className="text-heading-5 mb-5 mt-5 innovation-slider-headings">On-Demand </h3>
                                                <h3 className="text-heading-5 mb-5 mt-5 innovation-slider-headings">Expertise</h3>
                                                <p className="text-body-excerpt text-desc color-gray-500 mt-15 mb-20">Access our multidisciplinary team 
                                                whenever you need it, harnessing the power of diverse knowledge for your innovation initiatives.</p>
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

export default InnovationSolutions;

