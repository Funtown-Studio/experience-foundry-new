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


function EdutainmentCase() {
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
                                    Edutainment
                                </h1>
                                <p className="text-white mb-150">A Case Study On Scientifically Driven Story-Telling driven by THE Design Thinking methodology</p><svg class="stroke-svg" viewBox="0 0 154 13"></svg>
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
                                    A large health care system wanted to explore how it could innovate around the ways it could
                                    use the medium of television to engage its patient’s population and create a national
                                    presence - especially within the context of creating and maintaining a long-term healthy
                                    lifestyle.
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
                                    The challenge
                                </h2>
                            </div>
                            <div className="col-lg-6 col-sm-6 col-12">
                                <p>
                                    Develop and create a bespoke network-ready television pilot and series
                                    concept to drive consumer engagement and drive behavior change  with the
                                    health care brand.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <div style={{backgroundColor: "#F1F3F5"}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="2" viewBox="0 0 1504 2" fill="none">
                    <path d="M0 1H1504" stroke="#A3A3A3" />
                </svg>
                </div>
                <section className="section-box grey-bg text-black">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-sm-6 col-12">
                                <h2 className="text-heading-2 mb-30 text-black">
                                    The solution
                                </h2>
                                <img src="assets/imgs/page/cases-single/space-goggles.png" className="space-goggles"></img>
                            </div>
                            <div className="col-lg-6 col-sm-6 col-12">
                                <p className="mb-20">
                                    We applied our bespoke design thinking approach to this project challenge. 
                                    This is unique - i.e. we applied Design thinking to the creation of a television 
                                    series;
                                </p>
                                <p className="mb-20">
                                    In the vein of Design Thinking we focused in a strict data-driven approach which including 
                                    industry trend discovery, audience research and early pre-show ideation testing
                                </p>
                                <p className="">
                                    Testing with the target audience occurred throughout the show development process both from a 
                                    conceptual perspective in terms of story line but also with respect to micro-behaviors such 
                                    as show name reaction
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box grey-bg text-black">
                    <div className="container definition-box">
                        <div className="row">
                            <p>
                                <span className="text-bold" style={{fontSize: '25px', marginRight: '10px'}}>Edutainment</span> noun
                            </p>
                            <p>
                                /ˌedjʊˈteɪnmənt/
                            </p>
                            <p className="mt-20">
                                Educational entertainment (also referred to as edutainment) is media designed to educate 
                                through entertainment. The term was used as early as 1954 by Walt Disney. Most often it 
                                includes content intended to teach but has incidental entertainment value.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="section-box grey-bg text-black">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-sm-6 col-12">
                                <p>
                                    The intense focus of a rigorous iterative, viewer-tested methodology across all 
                                    stages of the show development led to the creation a market unique television 
                                    pilot show with global appeal touching on elements of living a healthy lifestyle 
                                    and global adventure travel.
                                </p>
                                <p className="mt-20">
                                    Further, to validate our approach we applied Neuroscientific techniques to evaluate 
                                    the show - specifically assessing the viewer’s response (Emotion, Memory and Attention) 
                                    to the show measured via EEG. The objective data gathered through EEG measurements 
                                    validated the strength of the pre-show behavioral work that was done in creating a 
                                    an engaging story.
                                </p>
                            </div>
                            <div className="col-lg-6 col-sm-6 col-12">
                                <img src="assets/imgs/page/cases-single/edutainment-treasure-chest.png" className="treasure-chest"></img>
                            </div>
                        </div>
                    </div>
                </section>
                <div style={{ backgroundColor: "#F1F3F5" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="2" viewBox="0 0 1504 2" fill="none">
                        <path d="M0 1H1504" stroke="#A3A3A3" />
                    </svg>
                </div>
                <section className="section-box grey-bg text-black">
                    <div className="container">
                        <div className="row">
                            <h2 className="text-heading-2 mb-30 text-black">
                                The Results
                            </h2>
                            <p className="mt-20">
                                Pilot series received industry acclaim and the further shows in this genre are being explored.
                            </p>
                        </div>
                    </div>
                </section>
                <ContactDark />
                <FooterDark />
            </LayoutSingleCases>

        </>
    )
}

export default EdutainmentCase;