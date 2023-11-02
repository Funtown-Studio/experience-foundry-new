/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from 'next/image';
import { useState, useEffect } from "react";
import HeaderDark from "./HeaderDark";
import Sidebar from "./Sidebar";


const HeroNeuro = ({headerStyle}) => {
    const [openClass, setOpenClass] = useState('');


    const handleOpen = () => {
        document.body.classList.add("mobile-menu-active");
        setOpenClass("sidebar-visible")
    }

    const handleRemove = () => {
        if (openClass === "sidebar-visible") {
            setOpenClass("")
            document.body.classList.remove("mobile-menu-active");
        }
    }

    return (
        <>
            <section className="section-box neuro-gradient-bg">
                <div className="banner-neuro neuro-main gradient-bg">
                    <div className="clouds-container">
                        <Image
                            src="/assets/imgs/page/neuro/cloudneuro.png"
                            alt="Clouds"
                            layout="fill"
                            className="cloud-image cloud-image-desktop"
                        />
                        <Image
                            src="/assets/imgs/page/neuro/cloudneuromobile.png"
                            alt="Clouds"
                            layout="fill"
                            className="cloud-image cloud-image-mobile"
                        />
                    </div>
                    <div className={openClass && "body-overlay-1"} onClick={handleRemove} />

                    <HeaderDark handleOpen={handleOpen} headerStyle={headerStyle} />
                    <Sidebar openClass={openClass} />


                    <div className="container">
                        <div className="ml-50">
                            <div className="image-overlay text-center frontfacing">
                                <Image src="/assets/imgs/page/neuro/neuroemote.svg" className="neuro-img-main" alt="NeuroEmote Logo" width={500} height={50} />
                            </div>
                            <div className="mt-50 text-center mb-100 just-italic">
                                <p>Decode Emotions, Elevate Experiences</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="42" viewBox="0 0 32 42" fill="none" className="mt-100">
                                    <g clip-path="url(#clip0_2519_1664)">
                                        <path d="M15.9766 0.394775V41.165" stroke="url(#paint0_linear_2519_1664)" stroke-miterlimit="10" />
                                        <path d="M0.109375 25.1481L15.9732 41.165L31.885 25.1028" stroke="url(#paint1_linear_2519_1664)" stroke-miterlimit="10" />
                                    </g>
                                    <defs>
                                        <linearGradient id="paint0_linear_2519_1664" x1="15.9766" y1="20.7799" x2="16.9276" y2="20.7886" gradientUnits="userSpaceOnUse">
                                            <stop offset="0.106195" stop-color="#5457E4" />
                                            <stop offset="1" stop-color="#F3AF56" />
                                        </linearGradient>
                                        <linearGradient id="paint1_linear_2519_1664" x1="0.109375" y1="33.1339" x2="19.6911" y2="47.5695" gradientUnits="userSpaceOnUse">
                                            <stop offset="0.106195" stop-color="#5457E4" />
                                            <stop offset="1" stop-color="#F3AF56" />
                                        </linearGradient>
                                        <clipPath id="clip0_2519_1664">
                                            <rect width="32" height="41" fill="white" transform="translate(0 0.394775)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className="container">
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
                    <div className="container mt-150">
                        <div className="row">
                            <div className="col-lg-6 col-sm-6 col-12 mb-80" id="second-section">
                                <h2 className="text-heading-2 mb-10">EEG & CT</h2>
                                <p className="mb-20">Our software captures brainwave activity, its spatial location, and the change
                                    in location over time, using only non-invasive electroencephalography (EEG) headsets,
                                    with as few as three sensor contact points.</p>
                                <p>Using the “doppler effect” of slight differences in signal intensity and frequency for the same
                                    brainwave, when it is detected by two different sensors, we can compute the 3D location of the
                                    brain’s activity with a resolution that was previously possibly only with room-sized, multi-million
                                    dollar MRI or Computerized Tomography (CT) scanning machines incompatible with field research.</p>
                            </div>
                            <div className="col-lg-6 col-sm-6 col-12">
                                <h2 className="text-heading-2 mb-10">Data compression</h2>
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
                </div>
                <div className="col-lg-12 col-sm-12 col-12">
                    <div className="centered-link">
                            <a  className="centered-link btn btn-mb scribble-btn">
                                <span href="/" className="overlay-text">Download PDF</span>
                            </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HeroNeuro;
