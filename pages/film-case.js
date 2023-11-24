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


function FilmCase() {
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
                                    Film Industry
                                </h1>
                                <h1 className="text-display-2 text-white">
                                    Project
                                </h1>
                                <p className="text-white mb-150">Using the medium of television to engage with patient’s and create a national presence.</p><svg class="stroke-svg" viewBox="0 0 154 13"></svg>
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
                                    A large health care system wanted to explore how it could innovate around the ways it could use the medium of television to 
                                    engage its patient’s population and create a national presence.
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
                                    Develop and create a bespoke network-ready television pilot and series 
                                    concept to drive consumer engagement with the health care brand.
                                </p>
                            </div>
                            <div className="col-lg-6 col-sm-6 col-12">
                            </div>
                        </div>
                        <div className="row mt-100">
                            <div className="col-lg-6 col-sm-6 col-12">
                                <img src="assets/imgs/page/cases-single/film-clapper.png" className="single-case-vial-img"></img>
                            </div>
                            <div className="col-lg-6 col-sm-6 col-12">
                                <h2 className="text-heading-2 mb-30 text-black">
                                    The Solution
                                </h2>
                                <p>
                                    We applied our bespoke design thinking approach to this project challenge. Adhering to a 
                                    strict data-driven approach (including trend discovery and early pre-show ideation testing) 
                                    we created a unique television pilot with global appeal touching on elements of living a 
                                    healthy lifestyle and global adventure travel. Further, to validate our approach we applied 
                                    Neuroscientific techniques to evaluate the show - specifically assessing the viewer’s 
                                    response (Emotion, Memory and Attention) to the show measured via EEG.
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

export default FilmCase;