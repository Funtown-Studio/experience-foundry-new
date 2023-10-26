/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Accordion from "../components/elements/Accordion";
import Layout from "../components/layout/Layout";
import TestimonialSlider from "../components/slider/Testimonial";
import HeroOne from "../components/layout/HeroOne";
import CaseStudiesSmall from "../components/elements/CaseStudiesSmall";
import Contact from "../components/layout/Contact";


function About2() {
    return (
        <>
            <Layout>
                <HeroOne />

                <section className="section-box mt-100 mb-100">

                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-sm-6 col-12">
                                <h2 className="text-heading-2 color-gray-900 mb-50">Our case studies</h2>
                            </div>
                            <div className="col-lg-6 col-sm-6 col-12">
                                <p>
                                    Prepare to embark on a captivating journey through Experience Foundry's case studies, where the alchemy of data,
                                    innovation, and storytelling intertwine to create extraordinary narratives of product development and immersive
                                    customer experiences.
                                </p>                            
                            </div>
                        </div>
                    </div>
                </section>

                <CaseStudiesSmall/>
                <Contact/>

            </Layout>

        </>
    )
}

export default About2;