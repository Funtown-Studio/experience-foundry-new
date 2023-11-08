/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Accordion from "../components/elements/Accordion";
import Layout from "../components/layout/Layout";
import TestimonialSlider from "../components/slider/Testimonial";
import CaseStudiesSmall from "../components/elements/CaseStudiesSmall";
import Contact from "../components/layout/Contact";
import HeroCase from "../components/layout/HeroCase";


function About2() {
    return (
        <>
            <Layout>
                <HeroCase />

                <section className="section-box mt-100 mb-100">

                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-sm-6 col-12">
                                <h2 className="text-heading-2 color-gray-900 mb-50">Our case studies</h2>
                            </div>
                            <div className="col-lg-5 col-sm-6 col-12">
                                <p>
                                    Prepare to embark on a captivating journey through Experience Foundry's case studies, where the alchemy of data,
                                    innovation, and storytelling intertwine to create extraordinary narratives of product development and immersive
                                    customer experiences.
                                </p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="200" height="45" viewBox="0 0 281 45" fill="none" className="customer-experiences-circle-box ">
                                    <path d="M93.4937 5.29776C-25.4757 5.87182 -51.0798 38.8973 150.443 42.9973C351.966 47.0972 275.279 14.7912 203.653 8.44348C146.352 3.36535 91.4297 1.37777 71.1309 1.01875" stroke="url(#paint0_linear_2075_1719)" stroke-width="2" />
                                    <defs>
                                        <linearGradient id="paint0_linear_2075_1719" x1="69.6296" y1="3.39189" x2="99.6138" y2="65.2737" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#EB9492" />
                                            <stop offset="1" stop-color="#5971B9" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="col-lg-5 col-sm-6 col-12">
                    <img src="assets/imgs/page/innovation/mouse-gradient-2.png" className="innovation-mouse-gradient blur-img-4" />
                </div>

                <CaseStudiesSmall />
                <Contact />

            </Layout>

        </>
    )
}

export default About2;