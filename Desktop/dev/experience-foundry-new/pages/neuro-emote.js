import Link from "next/link";
import { useState, useEffect } from "react";
import PriceTable2 from "../components/elements/PriceTable2";
import Layout from "../components/layout/Layout";
import OfferSlider from "../components/slider/Offer";
import TestimonialSlider from "../components/slider/Testimonial";
import Companies from "../components/slider/Companies";
import Contact from "../components/layout/Contact";
import SubNav from "../components/elements/SubNav";
import Footer from "../components/layout/Footer";
import HeroNeuro from "../components/layout/HeroNeuro";
import Image from 'next/image';

function Home() {
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
            <Layout>
                
                <HeroNeuro />


                <section className="section-box line-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-sm-6 col-12">
                                <h2 className="text-heading-2 text-white mb-50">Why Choose NeuroEmote?</h2>
                            </div>
                            <div className="col-lg-4 col-sm-6 col-12">
                            </div>
                        </div>
                        <div className="row">
                        <div className="col-lg-6 col-sm-6 col-12">
                                <Image src="/assets/imgs/page/neuro/heading1.svg" alt="Improve Customer Satisfaction" width={1000} height={300} />
                            </div>
                            <div className="col-lg-6 col-sm-6 col-12">
                                <Image src="/assets/imgs/page/neuro/heading2.svg" alt="Personalised Recommendations" width={1000} height={300} />
                            </div>
                            <div className="col-lg-6 col-sm-6 col-12">
                                <Image src="/assets/imgs/page/neuro/heading3.svg" alt="Informed Product Development" width={1000} height={300} />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-box gradient-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-sm-6 col-12">
                                <h2 className="text-heading-2 color-gray-900 mb-50">How can NeuroEmote help you?</h2>
                            </div>
                        </div>
                        <div className="row mt-50">
                            <div className="col-lg-4 col-sm-12 col-12 line-left">
                                <h2 className="text-heading-4 color-gray-900 mb-20">Scientific rigor and expertise</h2>
                                <p>The NeuroEmote technologies are backed by decades of scientific 
                                rigor and expertise. With fully transparent data collection, measurement precision, and 
                                signal analysis, you can be confident your results are objective and reliable.</p>
                            </div>
                            <div className="col-lg-4 col-sm-12 col-12 line-left">
                                <h2 className="text-heading-4 color-gray-900 mb-20">Quantified emotion</h2>
                                <p>Capture relative emotional intensities by category (Happiness, 
                                Surprise, Disgust, etc) and compare them across the different features of your product or 
                                story. Understand how emotions help or hinder the experience you are designing in unprecedented 
                                detail.</p>
                            </div>
                            <div className="col-lg-4 col-sm-12 col-12 line-left">
                                <h2 className="text-heading-4 color-gray-900 mb-20">Ease of use</h2>
                                <p>NeuroEmote is incredibly easy to use. Simply put the headset on 
                                your test participant and start analyzing their brain activity. The intuitive interface 
                                makes it easy to understand the brain's responses, and make informed decisions with the data.</p>
                            </div>
                        </div>
                        <div className="col-lg-12 col-sm-12 col-12">
                                <Link href="/" legacyBehavior>
                                    <a className="btn btn-mb d-lg-block scribble-btn">Download PDF</a>
                                </Link>
                        </div>                        
                    </div>
                </section>

                <Contact /> 
                <Footer/>
            </Layout>

        </>
    )
}

export default Home;