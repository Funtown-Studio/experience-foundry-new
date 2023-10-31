/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from 'next/image';

const ContactDark = () => {
    return (
        <>
             <section className="section-box black-background-contact">
                        <div className="container mt-80">
                            <div className="row">
                                <div className="col-lg-6 col-sm-12 mb-30">
                                    <h3 className="text-white mt-30">
                                    Get in Touch
                                    </h3>
                                    <p className="text-body-lead-large mt-30">
                                    Let’s embark on a journey of creativity and ignite the world
                                    </p>
                                    <p className="text-body-lead-large mt-30">
                                    hello@theexperiencefoundry.com                                    
                                    </p>
                                    <p className="text-body-lead-large mt-30">
                                    (+1) 23 456 78910                                    
                                    </p>
                                </div>
                                <div className="col-lg-6 col-sm-12 block-we-do">
                                    <div className="inner-image">
                                        <img className="bdrd-16 img-responsive" src="assets/imgs/page/home/astronaut-bike-white.png" alt="Astronaut and his dog riding a bike" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
        </>
    );
};

export default ContactDark;