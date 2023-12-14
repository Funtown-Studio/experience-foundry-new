import Link from "next/link";
import { useState, useEffect } from "react";
import PriceTable2 from "../components/elements/PriceTable2";
import Layout from "../components/layout/Layout";
import OfferSlider from "../components/slider/Offer";
import TestimonialSlider from "../components/slider/Testimonial";
import Companies from "../components/slider/Companies";
import ContactNeuro from "../components/layout/ContactNeuro";
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
                
                <HeroNeuro />
                <div className="neurocontainer">
                        <div className="row">
                            <div className="col-lg-6 col-sm-6 col-12" id="second-section">
                                <h2 className="text-heading-2 mb-50">What is it?</h2>
                            </div>
                            <div className="col-lg-6 col-sm-6 col-12">
                                <p className="mb-20">NeuroEmote is a hardware and software application that measures real-time
                                    intensity of specific cognitive and emotional activities in the brain at a level of detail never
                                    before possible in field research with a wireless, wearable device.</p>
                                <p>Our core technology was developed in conjunction with Stanford University (California) and
                                    MacQuarrie University (Australia), and is built on two unique technologies:</p>
                            </div>
                        </div>
                    </div>

                    <div className="neurocontainer">
                        <div className="row">
                            <div className="col-lg-6 col-sm-6 col-12 mb-40" id="second-section">
                                <h2 className="text-heading-2 mb-30">EEG & CT</h2>
                                <p className="mb-20 pr-50">Our software captures brainwave activity, its spatial location, and the change
                                    in location over time, using only non-invasive electroencephalography (EEG) headsets,
                                    with as few as three sensor contact points.</p>
                                <p className="pr-50">Using the “doppler effect” of slight differences in signal intensity and frequency for the same
                                    brainwave, when it is detected by two different sensors, we can compute the 3D location of the
                                    brain’s activity with a resolution that was previously possibly only with room-sized, multi-million
                                    dollar MRI or Computerized Tomography (CT) scanning machines incompatible with field research.</p>
                            </div>
                            <div className="col-lg-6 col-sm-6 col-12">
                                <h2 className="text-heading-2 mb-30">Data compression</h2>
                                <p className="mb-20">Our software captures brainwave activity, its spatial location, and the change
                                    in location over time, using only non-invasive electroencephalography (EEG) headsets, with as few as
                                    three sensor contact points.</p>
                                <p>Using the “doppler effect” of slight differences in signal intensity and frequency for the same
                                    brainwave, when it is detected by two different sensors, we can compute the 3D location of the
                                    brain’s activity with a resolution that was previously possibly only with room-sized, multi-million
                                    dollar MRI or Computerized Tomography (CT) scanning machines incompatible with field research.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12 col-sm-12 col-12">
                        <div className="centered-link">
                                <a  className="centered-link btn btn-mb scribble-btn" href="/assets/imgs/page/neuro/neuro-download.pdf">
                                    <span  className="overlay-text">Download PDF</span>
                                </a>
                        </div>
                    </div>

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

                <section className="section-box neuro-gradient-bg">
                <div className="banner-neuro neuro-main gradient-bg">
                    <div className="container  mt-100 mb-100">
                        <div className="row">
                            <div className="col-lg-6 col-sm-6 col-12" id="second-section">
                                <h2 className="text-heading-2 mb-50 ml-50">Revolutionizing Brain Monitoring</h2>
                            </div>
                            <div className="col-lg-6 col-sm-6 col-12">
                                <p className="mb-20 mr-50">With unmatched analytical resolution of cognition and emotion for a non-invasive
                                    brain-monitor, coupled with real-time (4 millisecond) processing, NeuroEmote’s technology is a platform
                                    for both monitoring brain activity and brain-computer interfaces, with the opportunity for use as a
                                    daily wearable in both professional and consumer scenarios.</p>
                                <p className="mr-50">The NeuroEmote system advances electroencephalography (EEG), transforming it to an accurate,
                                    field-ready indicator of human cognitive and emotional conditions.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

                <ContactNeuro /> 
                <Footer/>
 
        </>
    )
}

export default Home;