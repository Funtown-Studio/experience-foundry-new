/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Accordion from "../components/elements/Accordion";
import Layout from "../components/layout/Layout";
import TestimonialSlider from "../components/slider/Testimonial";
import CaseStudiesSmall from "../components/elements/CaseStudiesSmall";
import Contact from "../components/layout/Contact";
import HeroResources from "../components/layout/HeroResources";
import { useState, useEffect } from "react";
import Footer from "../components/layout/Footer";



function Resources() {

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

    const handleMouseEnter = (event) => {
        setIsHovered(true);
        setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <>
            <Layout>
                <HeroResources />

                <section className="section-box black-bg">

                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-sm-6 col-12">
                                <h2 className="text-heading-2 mb-50 text-white">Unleashing the Power of Storytelling and UX</h2>
                            </div>
                            <div className="col-lg-5 col-sm-6 col-12">
                                <p className="text-white">
                                Storytelling and UX are vital because they both have the ability to captivate and engage 
                                audiences on a deeper level, fostering emotional connections and enhancing the overall user 
                                experience. By exploring the resources page, you'll discover valuable insights on how leveraging 
                                storytelling and UX principles can elevate your projects, drive meaningful outcomes, and 
                                create experiences that resonate with your audience.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box black-bg">
                    <div className="">
                        <div className="row row-with-border" id="row-1" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <div className="col-lg-6 col-sm-6 col-12">
                                <p className="how-we-do-list">A StoryTelling Game</p>
                                <div className="reveal-image">
                                    {isHovered && (
                                        <img
                                            id="cursor-image"
                                            src="assets/imgs/page/resources/storytelling-hover.png"
                                            alt="Cursor Image"
                                            style={{
                                                transform: `translate(${cursorPosition.x - 50}px, ${-150}px)`,
                                                transition: "transform 0.1s ease-in-out", // You can adjust the transition duration as needed
                                                display: isHovered ? "block" : "none",
                                            }}
                                        />

                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="row row-with-border" id="row-2" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <div className="col-lg-6 col-sm-6 col-12">
                                <p className="how-we-do-list">Arrow and the Islands of Adventure</p>
                                <div className="reveal-image">
                                    {isHovered && (
                                        <img
                                            id="cursor-image"
                                            src="assets/imgs/page/home/edu-float.png"
                                            alt="Cursor Image"
                                            style={{
                                                transform: `translate(${cursorPosition.x - 50}px, ${-150}px)`,
                                                transition: "transform 0.1s ease-in-out", // You can adjust the transition duration as needed
                                                display: isHovered ? "block" : "none",
                                            }}
                                        />

                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="mt-40">
                            <Link href="/page-about-1" legacyBehavior><a className="btn btn-link icon-arrow-right-white text-white text-heading-6">All Case Studies</a></Link>
                        </div>
                    </div>
                </section>
                <Contact />
                <Footer/>
            </Layout>

        </>
    )
}

export default Resources;