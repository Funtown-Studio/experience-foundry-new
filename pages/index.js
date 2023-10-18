import Link from "next/link";
import { useState } from "react";
import PriceTable2 from "../components/elements/PriceTable2";
import Layout from "../components/layout/Layout";
import OfferSlider from "../components/slider/Offer";
import TestimonialSlider from "../components/slider/Testimonial";
import HeroOne from "../components/layout/HeroOne";
import Companies from "../components/slider/Companies";
import Contact from "../components/layout/Contact";
import SubNav from "../components/elements/SubNav";

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

    return (
        <>
            <Layout>
                
                <HeroOne />


                <section className="section-box mt-100 grey-bg">

                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-sm-6 col-12">
                                <h2 className="text-heading-2 color-gray-900 mb-50">Who we work with</h2>
                                <SubNav/>

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
                            <Companies />
                        </div>
                    </div>
                </section>

                <section className="section-box mt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-sm-6 col-12">
                                <h2 className="text-heading-2 color-gray-900 mb-50">What We Do</h2>
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
                </section>

                <section className="section-box mt-100 black-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-sm-6 col-12">
                                <h2 className="text-heading-2 text-white mb-50">How we do it</h2>
                            </div>
                            <div className="col-lg-6 col-sm-6 col-12">
                                <p className="text-white">We are a fellowship of Creatives, Technologists, Scientists, Business and Social Strategists 
                                    focused on kindness and candor in ALL of our relationships.
                                    We believe that creating remarkable experiences takes a team of passionate, 
                                    dedicated professionals invested in the needs of others. Thus, we live and work 
                                    by our Ethos—the Rhodium Rule: Whatever it is you would want someone to do for you, 
                                    do MORE for them.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box black-bg">
                <div className="">
                    <div className="row row-with-border">
                            <div className="col-lg-6 col-sm-6 col-12">
                                <p className="">SANITARIUM UX</p>
                            </div>
                            <div className="col-lg-6 col-sm-6 col-12">
                                <p className="">SANITARIUM UX</p>
                                <div class="reveal-image"></div>
                            </div>
                        </div>
                        <div className="row row-with-border">
                            <div className="col-lg-6 col-sm-6 col-12">
                                <p className="">SANITARIUM UX</p>
                            </div>
                            <div className="col-lg-6 col-sm-6 col-12">
                                <p className="">SANITARIUM UX</p>
                                <div class="reveal-image"></div>
                            </div>
                        </div>
                        <div className="row row-with-border">
                            <div className="col-lg-6 col-sm-6 col-12">
                                <p className="">SANITARIUM UX</p>
                            </div>
                            <div className="col-lg-6 col-sm-6 col-12">
                                <p className="">SANITARIUM UX</p>
                                <div class="reveal-image"></div>
                            </div>
                        </div>
                        <div className="mt-40">
                                <Link href="/page-about-1" legacyBehavior><a className="btn btn-link icon-arrow-right-white text-white text-heading-6">All Case Studies</a></Link>
                        </div>
                    </div>
                </section>
                <Contact />                 
            </Layout>

        </>
    )
}

export default Home;