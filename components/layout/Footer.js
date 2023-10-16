/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from 'next/image';

const Footer = () => {
    return (
        <>
            <footer className="footer footer-top mt-50">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 mb-30">
                            <h4 className="text-heading-5">Contact</h4>
                            <div className="mt-20 text-body-text color-gray-600 mb-20">address</div>
                            <div className="mt-20 text-body-text color-gray-600">contact number</div>
                            <div className="text-body-text color-gray-600">email@address.com</div>
                        </div>
                        <div className="col-lg-2 mb-30">
                            <h4 className="text-heading-5">About Us</h4>
                            <ul className="menu-footer mt-20">
                                <li>
                                    <Link href="/#" legacyBehavior>
                                        <a>Our Story</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#" legacyBehavior>
                                        <a>Case Studies</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-2 mb-30">
                            <h4 className="text-heading-5">Services</h4>
                            <ul className="menu-footer mt-20">
                                <li>
                                    <Link href="/blog-2" legacyBehavior>
                                        <a>Behavioural Analytics</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/page-pricing-1" legacyBehavior>
                                        <a>Innovation</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#" legacyBehavior>
                                        <a>Design</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-2 mb-30">
                            <h4 className="text-heading-5">Resources</h4>
                            <ul className="menu-footer mt-20">
                                <li>
                                    <Link href="/page-faqs-1" legacyBehavior>
                                        <a>Arrow Book</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#" legacyBehavior>
                                        <a>Story Telling</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-bottom mt-20">
                        <div className="row">
                            <div className="col-md-6">
                                <span className="color-gray-400 text-body-lead">© Experience Foundry 2023</span>
                                <Link href="/page-terms" legacyBehavior>
                                    <a className="text-body-text color-gray-400 ml-50">Privacy policy</a>
                                </Link>
                                <Link href="/page-terms" legacyBehavior>
                                    <a className="text-body-text color-gray-400 ml-50">Cookies</a>
                                </Link>
                            </div>
                            <div className="col-md-6 text-center text-lg-end text-md-end">
                                <div className="footer-social">
                                    <Link href="https://facebook.com" legacyBehavior>
                                        <a className="icon-socials icon-facebook"></a>
                                    </Link>
                                    <Link href="https://twitter.com" legacyBehavior>
                                        <a className="icon-socials icon-twitter"></a>
                                    </Link>
                                    <Link href="https://www.instagram.com" legacyBehavior>
                                        <a className="icon-socials icon-instagram"></a>
                                    </Link>
                                    <Link href="https://www.linkedin.com" legacyBehavior>
                                        <a className="icon-socials icon-linkedin"></a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;