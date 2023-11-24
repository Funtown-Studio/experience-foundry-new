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


function BehavioralAnalysisCase() {
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
                    <div className="banner-hero banner-3 behavioral-analytics-case-bg">
                        <div className="container">
                            <div className="text-center">
                                <h1 className="text-display-2 text-white mt-40">
                                    Behavioral Analytics
                                </h1>
                                <p className="text-white mb-150">The power of Behavioral Analytics to drive experience stories</p><svg class="stroke-svg" viewBox="0 0 154 13"></svg>
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
                                <img src="assets/imgs/page/cases-single/behavioral-analytics-bottle.png" className="single-case-bottle-img"></img>
                                <img src="assets/imgs/page/innovation/mouse-gradient-2.png" className="innovation-mouse-gradient blur-img-5" />

                            </div>
                            <div className="col-lg-6 col-sm-6 col-12">
                                <h5 className="mb-20 just-bold">
                                    Combining Objective and Subjective behavioral measurement techniques helps drive powerful insights. 
                                </h5> 
                                <p className="mb-20">
                                    For instance, in brain wave measurement, we use an untethered electroencephalography (EEG) headset 
                                    to sample brainwaves and extrapolate performance metrics (as of December 2022: Stress FRU, 
                                    Engagement, Interest, Excitement, Focus & Relaxation) and have created our own technological 
                                    advances to garner medical grade results through a commercially available headset - allowing for 
                                    flexibility and great opportunities for the use of this technology in different product development 
                                    and service experience design settings.
                                </p>
                                <p>
                                Paring together of this type of objective measurement with other subjective measurements - such as 
                                self-reported measurements provides a robust and validation platform upon which to build unique and 
                                strong story experiences and immersive products.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-box mt-100 grey-bg text-black">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-sm-6 col-12">
                                <h2 className="text-heading-2 mb-50 text-black">
                                    We are “Behaviorally Grounded”
                                </h2>
                            </div>
                            <div className="col-lg-6 col-sm-6 col-12">
                                <p className="mb-20">
                                    Based on our backgrounds in Innovation, Human Behavior and Experience Design, we 
                                    built The Experience Foundry to be, at its core, to be a Behaviorally-grounded 
                                    (using data science and cognitive neuroscience – which we call Behavioral Analytics) 
                                    think-tank that utilizes behavioral analytics to drive product innovation 
                                    and create really unique product and service experiences.
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

export default BehavioralAnalysisCase;