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


function StoryDrivenCase() {
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
                    <div className="banner-hero banner-3 story-driven-case-bg">
                        <div className="container">
                            <div className="text-center">
                                <h1 className="text-display-2 text-white mt-40">
                                    Story-Driven 
                                </h1>
                                <h1 className="text-display-2 text-white">
                                    Product Design
                                </h1>
                                <p className="text-white mb-150">Reimagining Sanitarium for the digital age.</p><svg class="stroke-svg" viewBox="0 0 154 13"></svg>
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
                                <img src="assets/imgs/page/innovation/mouse-gradient-2.png" className="innovation-mouse-gradient blur-img"/>
                            </div>
                            <div className="col-lg-6 col-sm-6 col-12">
                                <p className="mb-20">
                                    We began working with parent company Sanitariumto re-imagine the program for the digital age. 
                                </p> 
                                <p>
                                    By deeply embedding with their team and taking a customer-research centric approach, we guided and crafted a completely incredible, user-centric experience.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-box mt-100 mb-80 black-bg text-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-sm-6 col-12">
                                <h2 className="text-heading-2 mb-50 text-white">
                                    Revolutionizing wellness
                                </h2>
                            </div>
                            <div className="col-lg-6 col-sm-6 col-12">
                                <p className="mb-20">
                                    At its center are now live online groups and a new digital hub that guides participants through each step 
                                    of the program. From onboarding to blood tests and in-depth lifestyle assessments on diet, exercise, 
                                    sleep, stress, substance use, relationships and well-being, the new experience gives participants 
                                    a robust picture of their current health and personalized recommendations to move them toward 
                                    a holistic state of health.
                                </p> 
                            </div>
                        </div>
                        <div className="row mt-100">
                            <div className="col-lg-6 col-sm-6 col-12">
                            <p className="mb-10">
                                    Brand-new content, including a 12-episode lifestyle transformation show, MasterClass-style expert 
                                    videos, robust articles and fact sheets, and another learning track focused solely on habit change, 
                                    give participants the necessary knowledge needed to make informed lifestyle choices. Online and 
                                    printed cookbooks offer a cornucopia of plant-based recipes, and a journal provides much-needed 
                                    space for capturing insights and personal growth. Finally, an online-group structure ties it all 
                                    together, providing people with the opportunity to reinforce their learning and receive and lend 
                                    support to others. Every facet of the program has been co-designed with past and potential 
                                    participants.
                                </p> 
                            </div>
                            <div className="col-lg-6 col-sm-6 col-12">
                                <img src="assets/imgs/page/cases-single/story-driven-rocket.png" className="single-case-rocket-img"></img>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-box mt-50">

                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-sm-6 col-12 ml-50">
                                <h2 className="text-heading-2 color-gray-900 mb-50">The results</h2>
                                <p>
                                    Experience Foundry and the client team focused heavily on outcome results. Participants retake bloodwork 
                                    and health assessments at the end of the twelve weeks and complete an exit survey to gather experiential 
                                    and satisfaction data. A modest longitudinal study followed participants throughout their journey,
                                    providing insight into the lived experience of the Pivio program in the context of their daily lives.
                                </p>
                            </div>
                            <div className="col-lg-5 col-sm-6 col-12 ml-50">
                                <p className="mb-20 mt-90">
                                    Early results show improvements in biometrics, blood markers, and lifestyle habits, and a clear
                                    improvement on participants overall well-being. And given the product is only in its first year
                                    of a three-year roadmap, results are promising.
                                </p>
                                <div className="d-flex align-items-center mb-10">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                                        <path d="M1 0.25V6.75H13M13 6.75L8 1.75M13 6.75L8 11.75" stroke="black" />
                                    </svg>
                                    <p className="ml-5">4.4% BMI</p>
                                </div>
                                <div className="d-flex align-items-center mb-10">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                                        <path d="M1 0.25V6.75H13M13 6.75L8 1.75M13 6.75L8 11.75" stroke="black" />
                                    </svg>
                                    <p className="ml-5">7.8% HBA1c</p>
                                </div>
                                <div className="d-flex align-items-center mb-10">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                                        <path d="M1 0.25V6.75H13M13 6.75L8 1.75M13 6.75L8 11.75" stroke="black" />
                                    </svg>
                                    <p className="ml-5">-3.7% Weight</p>
                                </div>
                                <div className="d-flex align-items-center mb-10">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                                        <path d="M1 0.25V6.75H13M13 6.75L8 1.75M13 6.75L8 11.75" stroke="black" />
                                    </svg>
                                    <p className="ml-5">+23.4% Overall Well-being</p>
                                </div>
                                <div className="d-flex align-items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                                        <path d="M1 0.25V6.75H13M13 6.75L8 1.75M13 6.75L8 11.75" stroke="black" />
                                    </svg>
                                    <p className="ml-5">7.8%  NPS Score</p>
                                </div>
                            </div>

                            <div className="col-lg-6 col-sm-6 col-12 mb-60">

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

export default StoryDrivenCase;