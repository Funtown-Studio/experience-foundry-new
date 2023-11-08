import Link from "next/link";
import { useState, useEffect } from "react";
import PriceTable2 from "../components/elements/PriceTable2";
import Layout from "../components/layout/Layout";
import OfferSlider from "../components/slider/Offer";
import TestimonialSlider from "../components/slider/Testimonial";
import HeroOne from "../components/layout/HeroOne";
import Companies from "../components/slider/Companies";
import Contact from "../components/layout/Contact";
import SubNav from "../components/elements/SubNav";
import ContactDark from "../components/layout/ContactDark"
import DesignCases from "../components/slider/DesignCases";
import Image from 'next/image';
import HeroDesign from "../components/layout/HeroDesign";
import Footer from "../components/layout/Footer";


function Design() {
    const [activeIndex, setActiveIndex] = useState(1);

    const handleOnClick = (index) => {
        setActiveIndex(index); // remove the curly braces
    };

    // Open modal
    const [modal, setModal] = useState(false);
    const [videoLoading, setVideoLoading] = useState(true);
    const openModal = () => {
        setModal(!modal);
    };
    const spinner = () => {
        setVideoLoading(!videoLoading);
    };

    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        // Add event listeners to track cursor position
        document.addEventListener("mousemove", handleMouseMove);
        return () => {
            // Clean up the event listeners
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    const handleMouseMove = (e) => {
        setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };



    return (
        <>
            <HeroDesign/>

                <section className="section-box mt-200 big-div-horizontal-seperation">
                    <div className="container mb-120 mt-150">
                        <div className="row">
                            <div className="col-lg-6 col-sm-6 col-12">
                                <h2 className="text-heading-2 color-gray-900 mb-20">User-centered <span><br />Mindset</span> </h2>
                                <SubNav />
                            </div>
                            <div className="col-lg-6 col-sm-6 col-12">
                                <p>Exceptional design begins with empathy. We believe that truly remarkable experiences are born when
                                    design is centered around understanding people's needs, desires, and behaviors. Our user-centered
                                    mindset ensures that every design decision is made with the user in mind, resulting in experiences
                                    that resonate deeply.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-box mt-120">

                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-sm-6 col-12">
                                <h2 className="text-heading-2 color-gray-900 mb-50">Simplicity meets <span><br />elegance</span></h2>
                                <img src="assets/imgs/page/innovation/mouse-gradient-2.png" className="innovation-mouse-gradient blur-img-2" />
                            </div>

                            <div className="col-lg-6 col-sm-6 col-12">
                                <p>Our design philosophy revolves around the principle that simplicity is the ultimate sophistication. </p> <br />
                                <p>We aim to create designs that are not only visually appealing but also highly intuitive and usable.
                                    Whether it's a digital interface or a physical product, our goal is to make interactions effortless,
                                    leading to a seamless and enjoyable user experience.</p>
                            </div>
                        </div>
                    </div>
            </section>

            <section className="section-box mt-150 big-div-horizontal-seperation">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-sm-6 col-12">
                            <h2 className="text-heading-2 color-gray-900 mb-50">Our design work</h2>
                            <svg xmlns="http://www.w3.org/2000/svg" width="260" height="77" viewBox="0 0 298 77" fill="none" className="design-work-circle">
                                <path d="M99.8273 8.40197C-26.3922 11.9441 -54.2506 71.8934 159.446 75.0181C373.143 78.1427 292.472 21.6451 216.622 11.7372C155.943 3.81082 97.7204 1.39387 76.1942 1.17619" stroke="url(#paint0_linear_2199_3236)" stroke-width="2" />
                                <defs>
                                    <linearGradient id="paint0_linear_2199_3236" x1="74.5516" y1="5.47688" x2="141.494" y2="85.7914" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#EB9492" />
                                        <stop offset="1" stop-color="#5971B9" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-12">
                            <p>At Experience Foundry, we believe that exceptional design is the cornerstone of remarkable experiences.
                                Our commitment to creating innovative, user-centric designs is woven into the fabric of our approach.
                            </p> <br />
                            <p>With a deep appreciation for aesthetics, functionality, and human interaction, our design work is a testament
                                    to our dedication to crafting experiences that captivate, engage, and inspire. Explore our design journey,
                                    where creativity meets strategy and imagination knows no bounds.</p>
                            </div>
                        </div>
                        <DesignCases />
                    </div>
                </section>

                <section className="section-box mt-80 mb-40">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-sm-6 col-12">
                                <h2 className="text-heading-2 color-gray-900 mb-50">Future-proofing
                                    <span><br />your brand"</span></h2>
                                <img src="assets/imgs/page/design/moon-man.png" className="surfing-astronaut"></img>

                            </div>
                            <div className="col-lg-6 col-sm-6 col-12">
                                <p>
                                    In a rapidly evolving technological landscape, adaptability is paramount. Our designs are not confined to a
                                    single platform; they are versatile and adaptable, ensuring your brand's presence remains effective across
                                    current and emerging platforms.
                                </p>
                                <br />
                                <p>
                                    We understand that product and service experiences do not exist in isolation. This is where we bridge the gap
                                    between <span className="just-bold">design thinking and design making.</span> By blending core industrial design engineering techniques with
                                    sound experience design principles, we create user-centric hardware products that stand out in today's
                                    competitive market.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-box mt-80 black-bg text-white">

                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-sm-6 col-12">
                                <h2 className="text-heading-2 mb-30 text-white">Design that delivers results</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-4 col-md-12 col-sm-12">
                                        <div className="list-icons mt-50">
                                            <div className="vertical-line-white">
                                                <h4 className="text-heading-4 text-white">
                                                    Design-driven <br></br> revenue growth
                                                </h4>
                                                <p className="text-body-text text-white mt-30">
                                                Explore how our meticulous design approach enhances user engagement, drives conversions, 
                                                and boosts your revenue.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12 col-sm-12">
                                        <div className="list-icons mt-50">
                                            <div className="vertical-line-white">
                                                <h4 className="text-heading-4 text-white">
                                                    Loyalty-building<br></br> experiences
                                                </h4>
                                                <p className="text-body-text color-gray-600 mt-30 text-white">
                                                Discover how our designs create memorable experiences that foster unwavering customer loyalty.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12 col-sm-12">
                                        <div className="list-icons mt-50">
                                            <div className="vertical-line-white vertical-line-white-right">
                                                <h4 className="text-heading-4 text-white">Design:<br></br> your ROI booster</h4>
                                                <p className="text-body-text color-gray-600 mt-30 text-white">
                                                    Learn how our design services maximize returns, contributing to your business's success.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-box mt-80 mb-20">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-sm-6 col-12">
                                <h2 className="text-heading-2 color-gray-900 mb-50">Storytelling:
                                    <span><br />creating engaging narratives</span></h2>
                            </div>
                            <div className="col-lg-6 col-sm-6 col-12">
                                <p>
                                    Experience Foundry excels in the art of storytelling design. Through emotionally resonant narratives, seamless 
                                    integration across platforms, and user-centric approaches, we create compelling visual and verbal stories that 
                                    not only engage but also leave a profound impression. 
                                </p>
                                <br />
                                <p>
                                    Storytelling in design is the secret sauce that transforms ordinary experiences into unforgettable journeys, 
                                    leaving a lasting imprint in the hearts and minds of your audience.
                                </p>
                                <br />
                                <p>
                                    By blending impactful visuals with empathetic messaging, we help build your unique brand identity, making your 
                                    story unforgettable in the minds of your audience.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-box">
                    <div className="banner-hero banner-3">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-md-5">
                                    <div className="text-center">
                                        <h6 className="just-bold">
                                        Ready to immerse yourself in the magic of storytelling? Play our interactive storytelling game and
                                        experience the enchantment firsthand.
                                    </h6>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="180" height="45" viewBox="0 0 281 45" fill="none" className="storytelling-circle">
                                        <path d="M93.4937 5.29776C-25.4757 5.87182 -51.0798 38.8973 150.443 42.9973C351.966 47.0972 275.279 14.7912 203.653 8.44348C146.352 3.36535 91.4297 1.37777 71.1309 1.01875" stroke="url(#paint0_linear_2199_3231)" stroke-width="2" />
                                        <defs>
                                            <linearGradient id="paint0_linear_2199_3231" x1="69.6296" y1="3.39189" x2="99.6138" y2="65.2737" gradientUnits="userSpaceOnUse">
                                                <stop stop-color="#EB9492" />
                                                <stop offset="1" stop-color="#5971B9" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                    <button className="mt-50 square-button">Find out more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </section>


                <Contact />
                <Footer/>

        </>
    )
}

export default Design;