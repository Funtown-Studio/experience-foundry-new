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
import FooterDark from "../components/layout/FooterDark"
import LayoutSingleCases from "../components/layout/LayoutSingleCases";


function InvestmentPlanningCase() {
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
                    <div className="banner-hero banner-3 investment-planning-case-bg">
                        <div className="container">
                            <div className="text-center">
                                <h1 className="text-display-2 text-white mt-40">
                                    Redesigning
                                </h1>
                                <h1 className="text-display-2 text-white">
                                    Investment Planning
                                </h1>
                                <p className="text-white mb-150">Rethinking the brand and customer acquisition strategy for a financial organisation to create a model that engages with their clients</p><svg class="stroke-svg" viewBox="0 0 154 13"></svg>
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
                                <h2 className="text-heading-2 color-gray-900 mb-20">About the project</h2>
                                <SubNav />
                                <img src="assets/imgs/page/innovation/mouse-gradient-2.png" className="innovation-mouse-gradient blur-img-6" />
                            </div>
                            <div className="col-lg-6 col-sm-6 col-12">
                                <p className="mb-20">
                                    Rethinking the brand and customer acquisition strategy for a financial organization to 
                                    create a model that engages with their clients.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-box mt-100 grey-bg text-black">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-sm-6 col-12">
                                <h2 className="text-heading-2 mb-30 text-black">
                                    The Challenge
                                </h2>
                                <p>
                                    How to stand apart in a crowded philanthropic space while not sounding 
                                    unconventional in the fulfillment of bequests and trusts.
                                </p>
                            </div>
                            <div className="col-lg-6 col-sm-6 col-12">
                            </div>
                        </div>
                        <div className="row mt-100">
                            <div className="col-lg-6 col-sm-6 col-12">
                                <img src="assets/imgs/page/cases-single/investment-planning-vial.png" className="single-case-vial-img"></img>
                            </div>
                            <div className="col-lg-6 col-sm-6 col-12">
                                <h2 className="text-heading-2 mb-30 text-black">
                                    The Solution
                                </h2>
                                <p>
                                    Using our unique data-driven process we, created a forward-thinking product 
                                    experience package that included video and digital design assets as well as 
                                    digital research and market best practice guides. The keystone of this project 
                                    was the heavily researched, data-driven Customer Journey Maps that were created 
                                    and were highly acclaimed and validated by external experts in the financial 
                                    planning and investment industry.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <ContactDark />   
                <FooterDark/>             
            </LayoutSingleCases>

        </>
    )
}

export default InvestmentPlanningCase;