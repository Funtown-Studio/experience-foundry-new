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

    const logoSrc = scroll ? "/assets/imgs/logo-black.png" : "/assets/imgs/logo-white.svg";


    const listStyles = {
        color: scroll ? "black" : "white"
    };

    return (
        <>
            <header className={scroll ? `${headerStyle} header sticky-bar stick ` : `${headerStyle} header sticky-bar`} >
                <div className="container">
                    <div className="main-header">
                        <div className="header-left">
                            <div className="header-logo">
                                <Link href="/" legacyBehavior>
                                    <a className="d-flex">
                                        <img alt="Experience Foundry" src={logoSrc} />
                                    </a>
                                </Link>
                            </div>
                            <div className="header-nav">
                                <nav className="nav-main-menu d-none d-xl-block">
                                    <ul className="main-menu">
                                        <li className="">
                                            <Link href="/about" legacyBehavior><a className="active" style={listStyles}>About Us</a></Link>
                                        </li>
                                        <li className="">
                                            <Link href="/case-studies" legacyBehavior><a className="active" style={listStyles}>Case Studies</a></Link>
                                        </li>
                                        <li className="has-children">
                                            <Link href="#" legacyBehavior><a style={listStyles}>Services</a></Link>
                                            <ul className="sub-menu">
                                                <li>
                                                    <Link href="/behavioural-analytics" legacyBehavior><a><i className="fi fi-rr-star" />Behvaioural Analytics</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/innovation" legacyBehavior><a><i className="fi fi-rr-star" />Innovation</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="/design" legacyBehavior><a><i className="fi fi-rr-star" />Design</a></Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="">
                                            <Link href="#" legacyBehavior><a className="active" style={listStyles}>Resources</a></Link>
                                        </li>
                                        <li className="">
                                            <Link href="#" legacyBehavior><a className="active" style={listStyles}>Contact</a></Link>
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