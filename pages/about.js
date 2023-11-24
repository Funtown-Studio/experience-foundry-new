import Link from "next/link";
import { useState } from "react";
import CounterUp from "../components/elements/CounterUp";
import Layout from "../components/layout/Layout";
import TeamSlider from "../components/slider/Team";
import TestimonialSlider from "../components/slider/Testimonial";
import HeroOne from "../components/layout/HeroOne";
import Companies from "../components/slider/Companies";
import Contact from "../components/layout/Contact";
import Footer from "../components/layout/Footer";
import Swiper from 'swiper/bundle';
import { SwiperSlide } from "swiper/react";
import HeroAbout from "../components/layout/HeroAbout";
import Image from 'next/image';
import WhoWeWorkWith from "../components/slider/WhoWeWorkWith";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";



// import styles bundle
import 'swiper/css/bundle';
import Cards from "../components/slider/Cards";

function About1() {
    // Open modal
    const [modal, setModal] = useState(false);
    const [videoLoading, setVideoLoading] = useState(true);
    const openModal = () => {
    setModal(!modal);
    };
    const spinner = () => {
    setVideoLoading(!videoLoading);
    };
    return (
        <>
        <HeroAbout/>
            <section className="section-box">

                </section>
                <section className="section-box" >

                    <div className="container about-margin-head">
                        <div className="row">
                            <div className="col-lg-6 col-sm-6 col-12">
                                <h2 className="text-heading-2 color-gray-900 mb-50">Our vision and mission </h2>
                                <p>Our team of behavioral & data scientists, applied neuroscience engineers and designers collaborate to quantify both interaction behaviors and emotions.
                                <br></br><br></br>
                                While traditional research focuses on rational factors, we recognize that emotions dominate 70% of human decision-making. Experience Foundry unlocks valuable 
                                insights by measuring the emotional attributes of an experience alongside behavioral interactions. Our approach emphasizes the importance of accurate measurement 
                                and the use of a compelling and engaging story to showcase the merits of your solution. 
                                </p>

                            </div>
                            <div className="col-lg-6 col-sm-6 col-12">
                            <img className="chilling-astronaut" src="assets/imgs/page/about/1/chilling-astronaut.png" alt="chilling-astronaut" />
                        </div>
                        <p className="text-body-lead-large mt-30 just-bold">
                            Experience Foundry not only provides factual conclusions and analysis but also offers a conceptual framework, the story-experience matrix, to help you understand how
                            your audience perceives your solution in relation to their own experiences.
                        </p>
                        <div className="col-lg-5 col-sm-6 col-12">
                        <svg xmlns="http://www.w3.org/2000/svg" width="320" height="50" viewBox="0 0 281 45" fill="none" className="our-vision-and-mission-circle">
                            <path d="M93.4937 5.29776C-25.4757 5.87182 -51.0798 38.8973 150.443 42.9973C351.966 47.0972 275.279 14.7912 203.653 8.44348C146.352 3.36535 91.4297 1.37777 71.1309 1.01875" stroke="url(#paint0_linear_2075_1719)" stroke-width="2" />
                            <defs>
                                <linearGradient id="paint0_linear_2075_1719" x1="69.6296" y1="3.39189" x2="99.6138" y2="65.2737" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#EB9492" />
                                    <stop offset="1" stop-color="#5971B9" />
                                </linearGradient>
                            </defs>
                        </svg>
                        </div>

                    </div>
                </div>
                </section>



                <section className="section-box mt-100 mb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-sm-10 col-12 ">
                                <h2 className="text-heading-2 color-gray-900">Our team</h2>
                            </div>
                            <div className="col-lg-2 col-sm-1 col-12" />
                        </div>
                    </div>
                    <div className="container mt-70">
                        <div className="row">
                            <div className="col-lg-3 col-sm-12">
                                <div className="pb-40 mb-30">
                                    <Cards 
                                        image="assets/imgs/page/about/1/daniel.png" 
                                        text="Daniel Bruneau"
                                        subtitle="CEO"
                                        desc="Behaviorally driven innovation and adaptable affective design sits at the core of Daniel's think-tank mindset. He has built and led Experience Design organizations and research-led Innovation..."
                                        button="READ MORE"
                                        />
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-12">
                                <div className="pb-40 mb-30">
                                    <Cards 
                                        image="assets/imgs/page/about/1/jared.png" 
                                        text="Jared Thurmon"
                                        subtitle="Head of Business Development"
                                        desc="A serial entrepreneur and instigator of epic ideas, Jared has launched multiple successful business ventures in a number of key industry verticals including healthcare, media, manufacturing..."
                                        button="READ MORE"                                        
                                        />
                                </div>
                                
                            </div>
                            <div className="col-lg-3 col-sm-12">
                                <div className="pb-40 mb-30">
                                    <Cards 
                                        image="assets/imgs/page/about/1/daryl.png" 
                                        text="Daryl Gungadoo"
                                        subtitle="Head of Tech Innovation"
                                        desc="Perpetual curiosity and invention forms the foundation of Daryl's success in developing industry leading technologies. With a background that began in Acoustic Engineering for global broadcast agencies, Daryl's..."
                                        button="READ MORE"   
                                        />
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-12">
                                <div className="pb-40 mb-30">
                                    <Cards 
                                        image="assets/imgs/page/about/1/jonah.png" 
                                        text="Jonah Keegan"
                                        subtitle="Head of Data Science"
                                        desc="Jonah Keegan is a data enthusiast with a passion for organizing and analyzing complex datasets. His primary focus is human behavior in interaction with digital user interfaces. Recent projects of..."
                                        button="READ MORE"   
                                        />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-box mt-100 grey-bg">

                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-sm-6 col-12">
                                <h2 className="text-heading-2 color-gray-900 mb-50">Who we work with</h2>
                                <img src="assets/imgs/page/innovation/mouse-gradient-2.png" className="innovation-mouse-gradient blur-img-3" />
                            </div>
                            <div className="col-lg-6 col-sm-6 col-12">
                                <p>We are a fellowship of Creatives, Technologists, Scientists, Business and Social Strategists 
                                    focused on kindness and candor in ALL of our relationships.
                                    We believe that creating remarkable experiences takes a team of passionate, 
                                    dedicated professionals invested in the needs of others. Thus, we live and work 
                                    by our Ethos—the Rhodium Rule: Whatever it is you would want someone to do for you, 
                                    do MORE for them.</p>
                            </div>
                        </div>
                        <div className="row">
                        <WhoWeWorkWith />
                        </div>
                    </div>
                </section>
                <Contact />                 


                {modal ? (
                    <section className="modal__bg" onClick={openModal}>
                        <div className="modal__align">
                        <div className="modal__content" modal={modal}>
                            <div className="modal__video-align">
                            {videoLoading ? (
                                <div className="modal__spinner">
                                    <i className="fi-rr-refresh"></i>
                                </div>
                            ) : null}
                            <iframe
                                className="modal__video-style"
                                onLoad={spinner}
                                loading="lazy"
                                width="800"
                                height="500"
                                src="https://www.youtube.com/embed/oRI37cOPBQQ"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                            ></iframe>
                            </div>
                        </div>
                        </div>
                    </section>
                ) : null}
                <Footer/>
        </>
    )
}

export default About1;