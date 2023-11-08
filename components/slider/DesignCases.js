/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import Link from "next/link";
import { Autoplay, Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation]);
const DesignCases = () => {

    const data = [
        {
            img: "/assets/imgs/page/about/1/story.png",
            title: "Story-driven product design",
        },
        {
            img: "/assets/imgs/page/about/1/edu.png",
            title: "Edutainment",
        },
        {
            img: "/assets/imgs/page/about/1/behave.png",
            title: "Behavioural Analytics",
        },
        {
            img: "/assets/imgs/page/about/1/redesign.png",
            title: "Redesigning Investment Planning",
        },
        {
            img: "/assets/imgs/page/about/1/film.png",
            title: "Film Industry Project",
        },
        {
            img: "/assets/imgs/page/about/1/nasa.png",
            title: "NASA Innovation",
        }
    ];


    return (
        <>
            <div className="box-swiper">
                <div className="swiper-container swiper-group-1 mt-50">
                    <Swiper
                        slidesPerView={3} 
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
                                <div className="col-lg-10 col-sm-12 pr-30">
                                    <div className="card-grid-style-4">
                                        <div className="grid-5-img mb-15">
                                            <img src={item.img} className="img-border-radius" alt="Agon" />
                                        </div>
                                        <Link href="/blog-single" legacyBehavior><a className="text-heading-2 color-gray-900">{item.title}</a></Link>
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

