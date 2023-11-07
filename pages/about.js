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
import { Parallax, ParallaxLayer } from "swiper/modules";


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
                <section className="section-box mt-200 mt-50" >

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
                                <img className="" src="assets/imgs/page/about/1/chilling-astronaut.png" alt="chilling-astronaut" />
                            </div>
                            <p className="text-body-lead-large mt-30">
                            Experience Foundry not only provides factual conclusions and analysis but also offers a conceptual framework, the story-experience matrix, to help you understand how 
                            your audience perceives your solution in relation to their own experiences.
                            </p>
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
                                    <Cards image="assets/imgs/page/about/1/daniel.png" text="Slide 1" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-12">
                                <div className="pb-40 mb-30">
                                    <Cards image="assets/imgs/page/about/1/jared.png" text="Slide 1" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-12">
                                <div className="pb-40 mb-30">
                                    <Cards image="assets/imgs/page/about/1/daryl.png" text="Slide 1" />
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-12">
                                <div className="pb-40 mb-30">
                                    <Cards image="assets/imgs/page/about/1/jonah.png" text="Slide 1" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container mt-70">
                        <div className="row">
                            <div className="col-lg-4 col-sm-12">
                                <div className="card-grid-style-3 pb-40 bg-5 mb-30">
                                    <h3 className="text-heading-3 mt-20">Business Strategy</h3>
                                    <p className="text-body-excerpt mt-20">You are always welcome to visit our little den. Professional in teir craft! All products were super amazing with strong attension to details, comps and overall vibe.</p>
                                    <div className="mt-30">
                                        <Link href="/page-service-1" legacyBehavior><a className="btn btn-default">Learn more
                                        </a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12">
                                <div className="card-grid-style-3 bd-bg-6 pb-40 mb-30">
                                    <h3 className="text-heading-3 mt-20">Local Marketing</h3>
                                    <p className="text-body-excerpt mt-20">You are always welcome to visit our little den. Professional in teir craft! All products were super amazing with strong attension to details, comps and overall vibe.</p>
                                    <div className="mt-30">
                                        <Link href="/page-service-1" legacyBehavior><a className="btn btn-default">Learn more
                                        </a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12">
                                <div className="card-grid-style-3 bg-2 pb-40 mb-30">
                                    <h3 className="text-heading-3 mt-20">Social media</h3>
                                    <p className="text-body-excerpt mt-20">You are always welcome to visit our little den. Professional in teir craft! All products were super amazing with strong attension to details, comps and overall vibe.</p>
                                    <div className="mt-30">
                                        <Link href="/page-service-1" legacyBehavior><a className="btn btn-default">Learn more
                                        </a></Link>
                                    </div>
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
                        <div className="row mt-50">
                            <Companies />
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