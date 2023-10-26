/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from 'next/image';

const Footer = () => {
    return (
        <>
            <footer className="footer footer-top mt-50">
                <div className="container">
                    <div className=" mt-20">
                        <div className="row">
                            <div className="col-md-9">
                                <span className="color-gray-400 text-body-lead">© Experience Foundry 2023</span>
                                <Link href="/page-terms" legacyBehavior>
                                    <a className="text-body-text color-gray-400 ml-20">Our Story</a>
                                </Link>
                                <Link href="/page-terms" legacyBehavior>
                                    <a className="text-body-text color-gray-400 ml-20">Case Studies</a>
                                </Link>
                                <Link href="/page-terms" legacyBehavior>
                                    <a className="text-body-text color-gray-400 ml-20">Services</a>
                                </Link>
                                <Link href="/page-terms" legacyBehavior>
                                    <a className="text-body-text color-gray-400 ml-20">Rresources</a>
                                </Link>
                                <Link href="/page-terms" legacyBehavior>
                                    <a className="text-body-text color-gray-400 ml-20">Contact</a>
                                </Link>
                                <Link href="/page-terms" legacyBehavior>
                                    <a className="text-body-text color-gray-400 ml-20">Privacy Policy</a>
                                </Link>
                            </div>
                            <div className="col-md-3 text-center text-lg-end text-md-end">
                                <span>Proudly Built by <a href="funtownstudio.com">Funtown Studio</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;