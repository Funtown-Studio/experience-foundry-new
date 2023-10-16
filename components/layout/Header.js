/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState, useEffect } from "react";
const Header = ({ handleOpen, headerStyle }) => {
    const [scroll, setScroll] = useState(0)
    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    })
    return (
        <>
            <header className={scroll ? `${headerStyle} header sticky-bar stick ` : `${headerStyle} header sticky-bar`}>
                <div className="container">
                    <div className="main-header">
                        <div className="header-left">
                            <div className="header-logo">
                                <Link href="/" legacyBehavior>
                                    <a className="d-flex">
                                        {headerStyle ? <img alt="Experience Foundry" src="/assets/imgs/logo-white.svg" /> : <img alt="Experience Foundry" src="/assets/imgs/logo-white.svg" />}
                                    </a>
                                </Link>
                            </div>
                            <div className="header-nav">
                                <nav className="nav-main-menu d-none d-xl-block">
                                    <ul className="main-menu">
                                        <li className="">
                                            <Link href="#" legacyBehavior><a className="active">About Us</a></Link>
                                        </li>
                                        <li className="">
                                            <Link href="#" legacyBehavior><a className="active">Case Studies</a></Link>
                                        </li>
                                        <li className="has-children">
                                            <Link href="#" legacyBehavior><a>Services</a></Link>
                                            <ul className="sub-menu">
                                                <li>
                                                    <Link href="/page-about-1" legacyBehavior><a><i className="fi fi-rr-star" />Behvaioural Analytics</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/page-about-2" legacyBehavior><a><i className="fi fi-rr-star" />Innovation</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/page-about-3" legacyBehavior><a><i className="fi fi-rr-star" />Design</a></Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="">
                                            <Link href="#" legacyBehavior><a className="active">Resources</a></Link>
                                        </li>
                                        <li className="">
                                            <Link href="#" legacyBehavior><a className="active">Contact</a></Link>
                                        </li>
                                    </ul>
                                </nav>
                                <div className="burger-icon burger-icon-white" onClick={handleOpen}>
                                    <span className="burger-icon-top" /><span className="burger-icon-mid" /><span className="burger-icon-bottom" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    );
};

export default Header;