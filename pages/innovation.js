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

function Innovation() {
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

                <section className="section-box">
                    <div className="banner-hero banner-3 black-bg">
                        <div className="container">
                            <div className="text-center">
                                <h1 className="text-display-2 text-white mt-40">Innovation
                                </h1>
                                <p className="text-white">Fueling Transformation Through Innovation</p><svg class="stroke-svg" viewBox="0 0 154 13"></svg>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-box mt-100">

                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-sm-6 col-12">
                                <h2 className="text-heading-2 color-gray-900 mb-20">Innovation as a service</h2>
                                <SubNav />
                                <img src="assets/imgs/page/innovation/mouse-gradient-2.png" className="innovation-mouse-gradient blur-img"/>
                            </div>
                            <div className="col-lg-6 col-sm-6 col-12">
                                <p>Innovation is the cornerstone of progress, and at Experience Foundry, we bring innovation to the forefront of your business 
                                    strategy. Our mission is to empower your organization with cutting-edge ideas, technology, and solutions that drive meaningful 
                                    change. </p> <br></br>
                                    <p>It's a dynamic framework that provides you with ongoing access to our expertise in Technology Innovation, Experience Design, 
                                        Behavioral Analytics, and Business & Social Strategy.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-box mt-80">

                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-sm-6 col-12">
                                <h2 className="text-heading-2 color-gray-900 mb-50">Agile and adaptive solutions</h2>
                            </div>

                            <div className="col-lg-6 col-sm-6 col-12">
                                <p>Embracing innovation shouldn't be a one-time event; it should be an ongoing journey. 
                                <br/>
                                Our Innovation model is agile and adaptive, allowing your organization to stay ahead of the curve. 
                                    <br />
                                    We offer:</p>
                            </div>
                        </div>
                    <InnovationSolutions/>
                    </div>
                </section>

                <section className="section-box mt-80">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-sm-6 col-12">
                                <h2 className="text-heading-2 color-gray-900 mb-50">Innovation through <span><br/>neuro-insights</span></h2>
                            </div>
                            <div className="col-lg-6 col-sm-6 col-12">
                                <p>This service extends to Neuro-Innovation, where we leverage advanced EEG data analysis 
                                    and emotional response measurements. </p> <br/>
                                <p>This unique approach allows us to understand how the human brain interacts with your products 
                                    and services on an emotional level. By harnessing neuro-insights, we guide the creation of 
                                    remarkable, emotionally resonant experiences.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-box mt-100 mb-80">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-sm-6 col-12">
                                <h2 className="text-heading-2 color-gray-900 mb-50">Fostering Innovation Through
                                <span className="just-bold">"Arrow and the isand of Adventure"</span></h2>
                                <div className="col-lg-8 col-sm-6 col-12 text-center">
                                <img src="assets/imgs/page/innovation/book.png" className="book-img"></img>
                            </div>

                            </div>
                            <div className="col-lg-6 col-sm-6 col-12">
                                <p>"Arrow and the Islands of Adventure," a captivating children's book authored by Daniel Bruneau Ph.D. 
                                    and Jared Thurmon and beautifully illustrated by Patrick Corrigan, is a testament to our commitment 
                                    to nurturing young minds. Published in 2022 under Experience Foundry's copyright, this enchanting 
                                    story introduces design thinking's five steps: empathize, define, brainstorm, build, and test. 
                                </p> <br/>
                                <p>Through the adventures of Arrow and her friends, young readers are inspired to work collaboratively, 
                                    think critically, and embrace creativity, fostering a spirit of innovation from an early age—a spirit 
                                    that Experience Foundry continues to nurture through its innovative services.</p>
                                <button className="mt-30 square-button">Find out more</button>
                            </div>
                        </div>
                    </div>
                </section>


                <ContactDark />                 
            </Layout>

        </>
    )
}

export default Innovation;