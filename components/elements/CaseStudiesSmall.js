/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState, useEffect } from "react";
const CaseStudiesSmall = () => {

    return (
        <>

            <section className="section-box">

                <div className="container mt-90 mr-30">
                    <div className="row">
                        <div className="col-lg-4 col-sm-12 pr-30 mb-80">
                            <div className="card-grid-style-4">
                                <div className="grid-5-img mb-15">
                                    <img src="/assets/imgs/page/about/1/story.png" className="img-border-radius" alt="Agon" />
                                </div>
                                <Link href="/blog-single" legacyBehavior><a className="text-heading-2 color-gray-900">Story-driven product design</a></Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12 pr-30">
                            <div className="card-grid-style-4">
                                <div className="grid-5-img mb-15">
                                    <img src="/assets/imgs/page/about/1/edu.png" className="img-border-radius" alt="Agon" />
                                </div>
                                <Link href="/blog-single" legacyBehavior><a className="text-heading-2 color-gray-900">Edutainment</a></Link>

                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12 pr-30">
                            <div className="card-grid-style-4">
                                <div className="grid-5-img mb-15">
                                    <img src="/assets/imgs/page/about/1/behave.png" className="img-border-radius" alt="Agon" />
                                </div>
                                <Link href="/blog-single" legacyBehavior><a className="text-heading-2 color-gray-900">Behavioural Analytics</a></Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12 pr-30">
                            <div className="card-grid-style-4">
                                <div className="grid-5-img mb-15">
                                    <img src="/assets/imgs/page/about/1/redesign.png" className="img-border-radius" alt="Agon" />
                                </div>
                                <Link href="/blog-single" legacyBehavior><a className="text-heading-2 color-gray-900">Redesigning Investment Planning</a></Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12 pr-30">
                            <div className="card-grid-style-4">
                                <div className="grid-5-img mb-15">
                                    <img src="/assets/imgs/page/about/1/film.png" className="img-border-radius" alt="Agon" />
                                </div>
                                <Link href="/blog-single" legacyBehavior><a className="text-heading-2 color-gray-900">Film Industry Project</a></Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-12 pr-30">
                            <div className="card-grid-style-4">
                                <div className="grid-5-img mb-15">
                                    <img src="/assets/imgs/page/about/1/nasa.png" className="img-border-radius" alt="Agon" />
                                </div>
                                <Link href="/blog-single" legacyBehavior><a className="text-heading-2 color-gray-900">NASA <br/> Innovation</a></Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </>
    );
};

export default CaseStudiesSmall;

