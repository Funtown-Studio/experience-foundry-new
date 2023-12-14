import Link from "next/link";
import { useState, useEffect } from "react";
import Layout from "../components/layout/Layout";
import HeroStory from "../components/layout/HeroStory";
import Contact from "../components/layout/Contact";
import Footer from "../components/layout/Footer";
import Card from '../components/elements/Card'

function Storytelling() {
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
        // setLottiePosition(newPosition);
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

    return (
        <>
            <Layout>
                <HeroStory />
                <section className="section-box black-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-sm-6 col-12">
                                <h2 className="text-heading-2 text-white mb-50">The power of storytelling</h2>
                                <img src="assets/imgs/page/innovation/mouse-gradient-2.png" className="innovation-mouse-gradient blur-img-3" />
                            </div>
                            <div className="col-lg-6 col-sm-6 col-12">
                                <p className="text-white">The power of storytelling lies in its ability to give meaning to data. By sorting, 
                                    arranging, and presenting data visually, and explaining it through a story, storytelling 
                                    brings data to life and makes it relatable. It helps people understand complex information, 
                                    engage with it on an emotional level, and retain it better. </p>
                                <p className="mt-20 text-white"> Storytelling is important because it transforms data into a compelling narrative, 
                                    making it more accessible, memorable, and impactful for decision-making and communication.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box black-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-sm-6 col-12">
                                <h2 className="text-heading-2 text-white mb-50">How to Play</h2>
                            </div>
                            <div className="col-lg-6 col-sm-6 col-12">
                                <p className="text-white">Simply pick up a card and drag it to the spot that best fits, allowing you to 
                                    create seamless scenes with the 6 picture cards. With infinite combinations, 
                                    the storytelling possibilities are endless. </p>
                                <p className="mt-20 text-white"> Follow the astronaut through space, building a perpetual panorama and 
                                    discovering new storyscapes with each drag of the card. Let your imagination 
                                    soar as you uncover countless games and millions of unique stories. Where will the 
                                    story take you? The choice is yours to explore.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <Card />
                <Contact />
                <Footer />
            </Layout>
        </>
    )
}

export default Storytelling;
