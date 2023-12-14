/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from 'next/image';

const Contact = () => {
    return (
        <>
             <section className="section-box">
                        <div className="neurocontainer">
                            <div className="row">
                                <div className="col-lg-6 col-sm-12 mb-30">
                                    <h3 className="text-heading-1 mt-30">
                                    Get in Touch
                                    </h3>
                                    <p className="text-body-lead-large color-gray-600 mt-30">
                                    Let’s embark on a journey of creativity and ignite the world
                                    </p>
                                    <p className="text-body-lead-large color-gray-600 mt-30">
                                    hello@theexperiencefoundry.com                                    </p>
                                    <p className="text-body-lead-large color-gray-600 mt-30">
                                    (+1) 23 456 78910                                    </p>
                                </div>
                                
                            </div>
                        </div>
                    </section>
        </>
    );
};

export default Contact;