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
import BehaviouralSolutions from "../components/slider/BehaviouralSolutions";
import HeroBehavioural from "../components/layout/HeroBehavioural";
import Footer from "../components/layout/Footer";
import VennSwiper from "../components/elements/VennSwiper";
import { Swiper } from "swiper/react";

function BehvaiouralAnalytics() {
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
                <HeroBehavioural/>
                <section className="section-box">
                    <div className="banner-hero banner-3 black-bg">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-md-10">
                                    <div className="text-center">
                                        <h1 className="text-display-2 text-white mt-40 mb-30">Behavoiural Analytics</h1>
                                        <p className="text-white col-md-6 mx-auto text-center">
                                            Your new clients are making over 30,000 decisions each day. How do you convince 
                                            them that their next best decision includes you?
                                        </p>
                                        <svg className="stroke-svg" viewBox="0 0 154 13"></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-box mt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-sm-6 col-12">
                                <h2 className="text-heading-2 color-gray-900 mb-20">The how</h2>
                                <SubNav />
                            </div>
                            <div className="col-lg-6 col-sm-6 col-12">
                                <p>We work for you at the intersection of science and entrepreneurship, combining behavioral science and 
                                    quantitative analysis to help companies & organizations better understand their customers' 
                                    decision-making process.
                                </p><br/>

                                <p>
                                    The challenge is mapping that goal to your customer's habits and environment, uncovering the approach 
                                    that activates and sustains the desired behavior.
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-box mt-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-sm-6 col-12">
                                <h2 className="text-heading-2 color-gray-900 mb-50">Behavioural analytics:<span><br />problem solved.</span></h2>
                                <img src="assets/imgs/page/innovation/mouse-gradient-2.png" className="innovation-mouse-gradient blur-img" />
                            </div>

                            <div className="col-lg-6 col-sm-6 col-12">
                                <p>
                                    Our behavioral science expertise informs the measurement program, we identify the metrics and studies 
                                    needed to answer two core questions:
                                </p> 
                                <br />
                                <p>
                                    <span className="just-bold">How does your customer perceive the interaction?</span><br></br>
                                    <span className="just-italic">I.e. Is it obvious or easily discoverable? Frictionless? Personalized?</span>
                                </p>
                                <br />
                                <p>
                                    <span className="just-bold">How important is the interaction?</span><br></br>
                                    <span className="just-italic">I.e. How does it relate to the constellation of active touchpoints between you and the customer?</span>
                                </p>
                            </div>
                            <BehaviouralSolutions/>
                        </div>
                    </div>
                </section>

                <section className="section-box mt-50">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-sm-6 col-12">
                                <h6 className="just-bold">Starting with customer-level measurements, we break down the issues and environmental 
                                    factors that impact your customer decisions, and map them to a quadrant showing the perceived performance 
                                    relative to it's importance.
                                </h6> <br />
                                <p>
                                    For example, to increase app engagement, we might find time to launch is significantly less important to 
                                    customers than user interface response times, so a longer launch time that "pre-loads" more data, and shortens 
                                    user interface response times, should drive higher overall engagement.
                                </p> <br/>
                                <p className="just-bold">
                                    Then we go further...
                                </p>
                            </div>
                            <div className="col-lg-6 col-sm-6 col-12 text-center">
                            <img src="assets/imgs/page/behavioural/thinking-astronaut.png" className="thinking-astronaut-img"></img>
                            </div>
                        </div>
                    </div>
                </section>


            <section className="section-box mt-80 black-bg text-white">

                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-sm-6 col-12">
                                <h2 className="text-heading-2 mt-30 text-white">Optimizing customer touchpoints</h2>
                                <p className="text-white mt-40 mb-20">
                                    Every customer touchpoint has a benefit and a cost to your organization. A purchase interaction 
                                    generates revenue, a customer support interaction carries a cost. It's not enough to say 
                                    "improve user interface response times". What are the features, and what is their cost/benefit 
                                    ratio?
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-box   gradient-background">
                    <div className="container mt-150 mb-150">
                        <div className="row">
                            <div className="col-lg-6 col-sm-6 col-12">
                                <img src="assets/imgs/page/behavioural/brain-neuro.png" className="brain-neuro" />
                            </div>
                            <div className="col-lg-6 col-sm-6 col-12">
                                <p>
                                    NeuroEmote is an EEG Classification Framework that uses advanced signal processing and software to analyze brain 
                                    activity data, allowing businesses to measure how the brain responds to stimuli like products or stories.  
                                </p>
                                <br />
                                <p>
                                    It's portable, user-friendly, and delivers insights on emotional responses in real-world settings. With a strong 
                                    scientific foundation, it quantifies emotions, is easy to use, and helps designers understand how emotions impact 
                                    their creations.
                                </p>
                                <button className="mt-30 square-button">Find out more</button>
                            </div>
                        </div>
                    </div>
                </section>

                <Contact />
                <Footer/>

        </>
    )
}

export default BehvaiouralAnalytics;