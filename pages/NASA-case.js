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
import InnovationSolutions from "../components/slider/InnovationSolutions";
import Image from 'next/image';
import Footer from "../components/layout/Footer";
import LayoutSingleCases from "../components/layout/LayoutSingleCases";


function NASAcase() {
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
            <LayoutSingleCases>
                <section className="section-box">
                    <div className="banner-hero banner-3 NASA-case-bg">
                        <div className="container">
                            <div className="text-center">
                                <h1 className="text-display-2 text-white mt-40">
                                    Based on 
                                </h1>
                                <h1 className="text-display-2 text-white">
                                    a true story ...
                                </h1>
                                <div>
                                    <img className="header-arrow-home" src="assets/imgs/page/home/header-arrow.png" alt="arrow" />
                                </div>
                                <div className="">
                                    <a className="text-white btn-mb">Begin reading
                                    </a>
                                </div>
                            </div>
                            <div className="general-clouds">
                                <Image
                                    src="/assets/imgs/page/innovation/cloudsdesktop.png"
                                    alt="Clouds"
                                    layout="fill"
                                    className="cloud-image cloud-image-desktop"
                                />
                                <Image
                                    src="/assets/imgs/page/innovation/cloudsdesktop.png"
                                    alt="Clouds"
                                    layout="fill"
                                    className="cloud-image cloud-image-mobile"
                                />
                            </div>
                        </div>

                    </div>
                </section>


                <section className="section-box mt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-sm-6 col-12">
                                <h2 className="text-heading-2 color-gray-900 mb-20">Once upon a time ...</h2>
                                <img src="assets/imgs/page/cases-single/NASA-treasure.png" className="NASA-treasure"></img>
                            </div>
                            <div className="col-lg-6 col-sm-6 col-12">
                                <p className="mb-20">
                                    In a world where technology and innovation were at the forefront of exploration, 
                                    there was a company called Experience Foundry. They collaborated with visionary 
                                    organizations across various industries to inspire meaningful change and make a
                                     lasting impact.
                                </p>
                                <p className="">
                                    In a real-life occasion, Experience Foundry partnered with NASA, an organization 
                                    known for its relentless pursuit of knowledge, both in aviation and space 
                                    exploration. The project at hand was to improve the user experience for aircraft 
                                    pilots during critical missions, with the hope that such advancements could 
                                    eventually be adapted for space travel as well.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <svg className="mt-100" xmlns="http://www.w3.org/2000/svg" width="100%" height="2" viewBox="0 0 1504 2" fill="none">
                    <path d="M0 1H1504" stroke="#A3A3A3" />
                </svg>
                <section className="section-box mt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-sm-6 col-12" style={{paddingRight: '40px'}}>
                                <h2 className="text-heading-2 color-gray-900 mb-20">
                                    In this tale of innovation and collaboration,
                                    our heroes faced a daunting challenge.
                                </h2>
                            </div>
                            <div className="col-lg-6 col-sm-6 col-12">
                                <p className="mb-20">
                                    Aircraft pilots were struggling with cognitive overload during 
                                    high-stress emergency events, leading to potential human errors.
                                </p>
                                <p className="">
                                    Aircraft pilots were struggling with cognitive overload during 
                                    high-stress emergency events, leading to potential human errors.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box mt-100 black-bg2">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-sm-6 col-12 text-white" style={{paddingRight: '40px'}}>
                                <p className="text-white mb-20">
                                    The pilots began testing these new displays, which used various sensors to 
                                    detect potential faults and provide early warnings.
                                </p>
                                <p>
                                    The system then failed and the pilots' trust in the display diminished 
                                    significantly. They questioned whether they would rely on the display in 
                                    the future if it alerted them to a potential problem.
                                </p>
                            </div>
                            <div className="col-lg-6 col-sm-6 col-12">
                                <h2 className="text-heading-2 mb-30 text-white">
                                    To address this challenge, the power of 
                                    <span className="gradient-font"> design thinking </span>and 
                                    <span className="gradient-font"> user experience (UX) </span>
                                    needed to be harnessed.
                                </h2>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-box mt-100 text-black mb-80">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-sm-6 col-12" style={{ paddingRight: '40px' }}>
                                <p className="mb-20">
                                    Experience Foundry joined forces with NASA and the pilots to redesign
                                    the flight deck displays, focusing on usability and reliability.
                                </p>
                                <img src="assets/imgs/page/innovation/mouse-gradient-2.png" className="innovation-mouse-gradient blur-img-7" />
                            </div>
                            <div className="col-lg-6 col-sm-6 col-12">
                                <h2 className="text-heading-2 mb-30 ">
                                    By incorporating user feedback, they crafted a more intuitive 
                                    and dependable system that the pilots could trust under 
                                    intense pressure.
                                </h2>
                            </div>
                        </div>
                    </div>
                </section>
                <div >
                <svg className="mb-80" xmlns="http://www.w3.org/2000/svg" width="100%" height="2" viewBox="0 0 1504 2" fill="none">
                    <path d="M0 1H1504" stroke="#A3A3A3" />
                </svg>
                </div>
                <section className="section-box mt-50 text-black mb-80">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-sm-6 col-12" style={{ paddingRight: '40px' }}>
                                <p className="mb-20">
                                    The Redesigned displays were a resounding success!
                                </p>
                                <p className="mb-20">
                                The Pilots could now effectively manage emergencies, troubleshoot issues, and ensure the safety of their missions.
                                </p>
                                <img src="assets/imgs/page/cases-single/NASA-space-hands.png" className="space-hands"></img>

                            </div>
                            <div className="col-lg-6 col-sm-6 col-12">
                                <h2 className="text-heading-2 mb-30 ">
                                    This experience showcased the vital role that design thinking and UX play in 
                                    solving intricate problems, and the pilots made it their mission to integrate 
                                    these principles in every aspect of their work.
                                </h2>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box mt-50 text-white" style={{ backgroundColor: 'black', paddingTop: '100px', paddingBottom: '100px' }}>
                    <div className="container">
                        <div className="row">
                            <div >
                                <p className="mb-20">
                                    And they all lived innovatively ever after...
                                </p>
                            </div>
                            <div className="">
                                <h2 className="text-heading-2 mb-30 text-white">
                                    Join Experience Foundry on this exciting adventure as they unlock
                                    new possibilities, reimagine industries, and shape the future with 
                                    the transformative power of design thinking. Together, we can create 
                                    solutions that captivate, engage, and delight others, all while driving 
                                    business success. 
                                </h2>
                                <svg xmlns="http://www.w3.org/2000/svg" width="566" height="71" viewBox="0 0 566 71" fill="none" className="NASA-circle">
                                    <path d="M187.385 8.11519C-53.1336 7.53249 -104.484 59.4935 302.994 68.5105C710.473 77.5275 555.026 25.423 410.138 14.4762C294.227 5.7187 183.163 1.88365 142.119 1.0608" stroke="url(#paint0_linear_2161_802)" stroke-width="2" />
                                    <defs>
                                        <linearGradient id="paint0_linear_2161_802" x1="139.114" y1="4.79886" x2="178.947" y2="111.21" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#EB9492" />
                                            <stop offset="1" stop-color="#5971B9" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </div>
                </section>
                <Contact />
                <Footer />
            </LayoutSingleCases>

        </>
    )
}

export default NASAcase;