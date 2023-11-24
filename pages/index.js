import Link from "next/link";
import { useState, useEffect } from "react";
import PriceTable2 from "../components/elements/PriceTable2";
import Layout from "../components/layout/Layout";
import OfferSlider from "../components/slider/Offer";
import TestimonialSlider from "../components/slider/Testimonial";
import HeroOne from "../components/layout/HeroOne";
import Companies from "../components/slider/Companies";
import Contact from "../components/layout/Contact";
import SubNavHome from "../components/elements/SubNavHome";
import Footer from "../components/layout/Footer";
import WhoWeWorkWith from "../components/slider/WhoWeWorkWith";
import SubNavHome2 from "../components/elements/SubNavHome2";
import Lottie from 'lottie-react';
import animationData from '../public/assets/imgs/page/home/astro-bike.json';

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

    const handleMouseEnter = (event) => {
        setIsHovered(true);
        setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const [buttons, setButtons] = useState(Array(6).fill(false));

    const handleButtonClick = (index) => {
        const newButtons = Array(6).fill(false);
        newButtons[index] = true;
        setButtons(newButtons);
    
        // Calculate the new position for the Lottie animation based on the clicked button
        const angle = ((index + 1) / (buttons.length + 1)) * Math.PI;
        const newPosition = {
            top: `${70 - 48 * Math.sin(angle)}%`,
            left: `${56 + 43 * Math.cos(angle)}%`,
        };
    
        // Update the Lottie animation position
        setLottiePosition(newPosition);
    };

    const buttonStyle = {
        width: '20px',
        height: '20px',
        backgroundColor: '#3498db',
        border: '1px solid #000',
        borderRadius: '50%',
        cursor: 'pointer',
        position: 'absolute',
        transformOrigin: 'bottom center',
        marginTop: '186%',
    };

    const [lottiePosition, setLottiePosition] = useState({ top: 0, left: 0 });


    return (
        <>
            <Layout>
                <HeroOne />


                <section className="section-box mt-100 grey-bg">

                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-sm-6 col-12">
                                <h2 className="text-heading-2 color-gray-900 mb-50">Who we work with</h2>
                                <img src="assets/imgs/page/innovation/mouse-gradient-2.png" className="innovation-mouse-gradient blur-img-3" />
                            </div>

                            <div className="col-lg-6 col-sm-6 col-12">
                                <p>We are a fellowship of Creatives, Technologists, Scientists, Business and Social Strategists
                                    focused on kindness and candor in ALL of our relationships.
                                    We believe that creating remarkable experiences takes a team of passionate,
                                    dedicated professionals invested in the needs of others. Thus, we live and work
                                    by our Ethos—the Rhodium Rule: Whatever it is you would want someone to do for you,
                                    do MORE for them.</p>
                            </div>
                        </div>
                        <div className="row mt-50">
                            <WhoWeWorkWith />
                        </div>
                    </div>
                </section>

                <section className="section-box mt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-sm-6 col-12">
                                <h2 className="text-heading-2 color-gray-900 mb-50">What We Do</h2>
                                <SubNavHome />
                            </div>
                            <div className="col-lg-6 col-sm-6 col-12">
                                <p>We are a fellowship of Creatives, Technologists, Scientists, Business and Social Strategists
                                    focused on kindness and candor in ALL of our relationships.
                                    We believe that creating remarkable experiences takes a team of passionate,
                                    dedicated professionals invested in the needs of others. Thus, we live and work
                                    by our Ethos—the Rhodium Rule: Whatever it is you would want someone to do for you,
                                    do MORE for them.</p>
                            </div>
                        </div>

                    </div>
                    <div className="curved-line" id="curved-line"></div>
                    <div className="button-container mt-200">

                        {buttons.map((isFilled, index) => {
                            const angle = ((index + 1) / (buttons.length + 1)) * Math.PI;
                            const position = {
                                top: `${44 - 49 * Math.sin(angle)}%`,
                                left: `${52.5 + 41 * Math.cos(angle)}%`,
                                transform: `translate(-300%, -120%) rotate(${-angle}rad)`,
                            };

                            return (
                                <div
                                    key={index}
                                    className={`button ${isFilled ? 'filled' : ''}`}
                                    style={{
                                        ...buttonStyle,
                                        ...position,
                                        backgroundColor: isFilled ? '#000' : 'transparent', // Black fill when clicked
                                    }}
                                    onClick={() => handleButtonClick(index)}

                                ></div>

                            );
                        })}
{/*                         <Lottie
                            animationData={animationData}
                            style={{ position: 'relative', ...lottiePosition, width: '200px' }}
                        /> */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="1260" height="372" viewBox="0 0 1512 372" fill="none">
                            <path d="M0 371C451.5 -140 1050 -125 1490 350" stroke="black" />
                        </svg>
                    </div>
                </section>

                <section className="section-box mt-100 black-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-sm-6 col-12">
                                <h2 className="text-heading-2 text-white mb-50">How we do it</h2>
                                <SubNavHome2 />
                            </div>
                            <div className="col-lg-6 col-sm-6 col-12">
                                <p className="text-white">Below you find a selection of our more unique projects
                                    providing a snapshot of the diversity of work and industries we work in. Out of courtesy
                                    for our clients, we have not shared their names. However, we are always happy to share
                                    additional details if you decide to engage on a project adventure with us.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box black-bg">
                    <div className="">
                        <div className="row row-with-border" id="row-1" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <div className="col-lg-6 col-sm-6 col-12">
                                <p className="how-we-do-list">Story-Driven Product Design</p>
                                <div className="reveal-image">
                                    {isHovered && (
                                        <img
                                            id="cursor-image"
                                            src="assets/imgs/page/home/story-float.png"
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
                            <div className="col-lg-6 col-sm-6 col-12">
                                <p className="how-we-do-list2">SANITARIUM</p>
                                <div class="reveal-image"></div>
                            </div>
                        </div>
                        <div className="row row-with-border" id="row-2" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <div className="col-lg-6 col-sm-6 col-12">
                                <p className="how-we-do-list">Edutainment</p>
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
                            <div className="col-lg-6 col-sm-6 col-12">
                                <p className="how-we-do-list2">HEALTHCARE</p>
                                <div class="reveal-image"></div>
                            </div>
                        </div>
                        <div className="row row-with-border" id="row-3" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <div className="col-lg-6 col-sm-6 col-12">
                                <p className="how-we-do-list">Behavioural Analytics</p>
                                <div className="reveal-image">
                                    {isHovered && (
                                        <img
                                            id="cursor-image"
                                            src="assets/imgs/page/home/behave-float.png"
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
                            <div className="col-lg-6 col-sm-6 col-12">
                                <p className="how-we-do-list2">CYBERSECURITY</p>
                                <div class="reveal-image"></div>
                            </div>
                        </div>
                        <div className="row row-with-border" id="row-4" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <div className="col-lg-6 col-sm-6 col-12">
                                <p className="how-we-do-list">Redesigning Investment Planning</p>
                                <div className="reveal-image">
                                    {isHovered && (
                                        <img
                                            id="cursor-image"
                                            src="assets/imgs/page/home/redesign-float.png"
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
                            <div className="col-lg-6 col-sm-6 col-12">
                                <p className="how-we-do-list2">FINANCE</p>
                                <div class="reveal-image"></div>
                            </div>
                        </div>
                        <div className="row row-with-border" id="row-5" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <div className="col-lg-6 col-sm-6 col-12">
                                <p className="how-we-do-list">Film Industry Project</p>
                                <div className="reveal-image">
                                    {isHovered && (
                                        <img
                                            id="cursor-image"
                                            src="assets/imgs/page/home/film-float.png"
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
                            <div className="col-lg-6 col-sm-6 col-12">
                                <p className="how-we-do-list2"></p>
                                <div class="reveal-image"></div>
                            </div>
                        </div>
                        <div className="row row-with-border" id="row-5" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <div className="col-lg-6 col-sm-6 col-12">
                                <p className="how-we-do-list">NASA Innovation</p>
                                <div className="reveal-image">
                                    {isHovered && (
                                        <img
                                            id="cursor-image"
                                            src="assets/imgs/page/home/nasa-float.png"
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
                            <div className="col-lg-6 col-sm-6 col-12">
                                <p className="how-we-do-list2"></p>
                                <div class="reveal-image"></div>
                            </div>
                        </div>
                        <div className="mt-40">
                            <Link href="/page-about-1" legacyBehavior><a className="btn btn-link icon-arrow-right-white text-white text-heading-6">All Case Studies</a></Link>
                        </div>
                    </div>
                </section>
                <Contact />
                <Footer />
            </Layout>

        </>
    )
}

export default Home;