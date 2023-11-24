/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from 'next/image';

const HeroResources = () => {
    return (
        <>
            <section className="section-box">
                <div className="banner-hero banner-3 black-bg">
                    <div className="container mb-30">
                        <div className="text-center">
                            <h1 className="text-display-2 text-white mt-40">Resources
                            </h1>
                            <div className="text-body-lead-large text-white mt-50">Combine the power of storytelling and user 
                            experience to create memorable experiences. Our resources are designed to enhance your understanding 
                            and utilization of our outcome-focused methodology, with a specific focus on leveraging storytelling 
                            and UX principles.</div>

                            <div>
                                <img className="header-arrow-home" src="assets/imgs/page/home/header-arrow.png" alt="arrow" />
                            </div>
                            <div className="">
                                <a className="text-white btn-mb">Explore
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HeroResources;
