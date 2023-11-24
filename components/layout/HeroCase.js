/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from 'next/image';
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const HeroCase = () => {
    return (
        <>
            <section className="section-box">              
                <div className="banner-hero banner-3 black-bg">
                    <div className="container mb-30">
                        <div className="text-center">
                            <h1 className="text-display-2 text-white mt-40">Case Studies
                            </h1>
                            <svg xmlns="http://www.w3.org/2000/svg" width="456" height="7" viewBox="0 0 456 7" fill="none">
                                <path d="M2 2C62.7832 5.7186 125.958 4.93007 188.255 4.93007C276.836 4.93007 365.418 4.93007 454 4.93007" stroke="url(#paint0_linear_2075_1720)" stroke-width="3" stroke-linecap="round" />
                                <defs>
                                    <linearGradient id="paint0_linear_2075_1720" x1="52.2225" y1="2.40386" x2="52.49" y2="-6.00587" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#FF8682" />
                                        <stop offset="1" stop-color="#5457E4" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <div className="text-body-lead-large text-white mt-50">Discover the Power of Experience Foundry: <br />Unveiling Remarkable Case Studies.</div>

                            <div>
                                <img className="header-arrow-home" src="assets/imgs/page/home/header-arrow.png" alt="arrow" />
                            </div>
                            <div className="">
                                <a className="text-white btn-mb">Discover
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="clouds-container">
                    <Image
                        src="/assets/imgs/page/cases/case-clouds.png"
                        alt="Clouds"
                        layout="fill"
                        className="cloud-image cloud-image-desktop"
                    />
                </div>
            </section>
        </>
    );
};

export default HeroCase;
