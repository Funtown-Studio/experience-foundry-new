/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from 'next/image';

const HeroOne = () => {
    return (
        <>
            <section className="section-box">
                <div className="banner-hero banner-3 black-bg">
                    <div className="container mb-30">
                        <div className="text-center">
                            <h1 className="text-display-2 text-white mt-40">Galactic Odyssey:<br className="d-lg-block d-none" />a storytelling game<svg class="stroke-svg" viewBox="0 0 154 13"></svg>
                            </h1>
                            <div className="text-body-lead-large text-white mt-40">Unleash your creativity, introduce twists and challenges, and craft an enthralling space odyssey. With Galactic Odyssey, the possibilities are abundant as the cards magically match up to provide endless storytelling opportunities in the vast expanse of space.</div>
                            <svg viewBox="193.013 175.922 113.569 77.012" xmlns="http://www.w3.org/2000/svg" className="svg-box">
                                <defs>
                                    <linearGradient gradientUnits="userSpaceOnUse" x1="248.898" y1="178.127" x2="248.898" y2="248.4" id="gradient-0" gradientTransform="matrix(0.254871, 0.966975, -1.487851, 0.392162, 497.498307, -121.2631)">
                                        <stop offset="0" style={{ stopColor: "rgb(89, 113, 185)" }} />
                                        <stop offset="1" style={{ stopColor: "rgb(235, 148, 146)" }} />
                                    </linearGradient>
                                </defs>
                                <path style={{
                                    fill: "none",
                                    fillRule: "nonzero",
                                    stroke: "url(#gradient-0)",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                }} d="M 237.93 189.449 C 214.397 189.112 194.229 199.414 204.986 208.519 C 223.845 224.481 292.938 217.897 293.361 201.671 C 293.775 185.786 250.655 183.373 233.88 184.012"
                                ></path>
                            </svg>
                            <div>
                                <img className="header-arrow-home" src="assets/imgs/page/home/header-arrow.png" alt="arrow" />
                            </div>
                            <div className="">
                                <a className="text-white btn-mb">Let's Play
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HeroOne;
