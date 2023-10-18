import Link from "next/link";
import { useState } from "react";
import CounterUp from "../components/elements/CounterUp";
import Layout from "../components/layout/Layout";
import TeamSlider from "../components/slider/Team";
import TestimonialSlider from "../components/slider/Testimonial";
import HeroOne from "../components/layout/HeroOne";
import Companies from "../components/slider/Companies";
import Contact from "../components/layout/Contact";
import SubNav from "../components/elements/SubNav";
import ContactDark from "../components/layout/ContactDark";
import FooterDark from "../components/layout/FooterDark";

function About1() {
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
                <section className="section-box custom-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-sm-6 col-12">
                                <h2 className="text-heading-2 color-gray-900 mb-50">About the project</h2>
                                <SubNav/>

                            </div>
                            <div className="col-lg-6 col-sm-6 col-12">
                                <p>
                                    We began working with parent company Sanitariumto re-imagine the program for the digital age.
                                    <br></br><br></br>
                                    By deeply embedding with their team and taking a customer-research centric approach, we guided and crafted a completely incredible, user-centric experience.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-box mt-100 black-background">
                    <div className="container ">
                        <div className="row mb-80">
                            <div className="col-lg-6 col-sm-6 col-12">
                                <h2 className="text-heading-case-study mb-50 text-white">Revolutionizing wellness</h2>

                            </div>
                            <div className="col-lg-6 col-sm-6 col-12">
                                <p>
                                At its center are now live online groups and a new digital hub that guides participants through each step of the program. 
                                From onboarding to blood tests and in-depth lifestyle assessments on diet, exercise, sleep, stress, substance use, 
                                relationships and well-being, the new experience gives participants a robust picture of their current health and 
                                personalized recommendations to move them toward a holistic state of health.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-sm-6 col-12">
                                <p>
                                    Brand-new content, including a 12-episode lifestyle transformation show, MasterClass-style expert videos, robust articles and fact sheets, and another learning 
                                    track focused solely on habit change, give participants the necessary knowledge needed to make informed lifestyle choices. 
                                    <br></br><br></br>
                                    Online and printed cookbooks offer a cornucopia of plant-based recipes, and a journal provides much-needed space for capturing insights and personal growth.
                                    Finally, an online-group structure ties it all together, providing people with the opportunity to reinforce their learning and receive and lend support to others. 
                                    Every facet of the program has been co-designed with past and potential participants.
                                </p>
                            </div>
                            <div className="col-lg-6 col-sm-6 col-12">
                                <div className="black-bg-img">
                                    <img className="" src="assets/imgs/page/cases/revolutionary-astronaut.png" alt="chilling-astronaut" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section-box custom-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-sm-6 col-12">
                                <h2 className="text-heading-2 color-gray-900 mb-50">The results</h2>
                                <p>
                                    Experience Foundry and the client team focused heavily on outcome results. Participants retake bloodwork and health assessments at the end of the twelve weeks 
                                    and complete an exit survey to gather experiential and satisfaction data. A modest longitudinal study followed participants throughout their journey, 
                                    providing insight into the lived experience of the Pivio program in the context of their daily lives. 
                                </p>
                            </div>
                            <div className="col-lg-6 col-sm-6 col-12 mt-90">
                                <p>
                                    Early results show improvements in biometrics, blood markers, and lifestyle habits, and a clear improvement on participants overall well-being. And given the 
                                    product is only in its first year of a three year-roadmap, results are promising.
                                    <br></br><br></br>
                                    
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <ContactDark/>     
                <FooterDark/>

                {modal ? (
                    <section className="modal__bg" onClick={openModal}>
                        <div className="modal__align">
                        <div className="modal__content" modal={modal}>
                            <div className="modal__video-align">
                            {videoLoading ? (
                                <div className="modal__spinner">
                                    <i className="fi-rr-refresh"></i>
                                </div>
                            ) : null}
                            <iframe
                                className="modal__video-style"
                                onLoad={spinner}
                                loading="lazy"
                                width="800"
                                height="500"
                                src="https://www.youtube.com/embed/oRI37cOPBQQ"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                            ></iframe>
                            </div>
                        </div>
                        </div>
                    </section>
                ) : null}
            </Layout>

        </>
    )
}

export default About1;