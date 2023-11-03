/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';

const Sidebar = ({ openClass }) => {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };
    return (
        <>
            <div className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar ${openClass}`}>
                <PerfectScrollbar className="mobile-header-wrapper-inner">
                    <div className="mobile-header-top">
                        <div className="user-account">
                            <div className="content">
                            </div>
                        </div>
                    </div>
                    <div className="mobile-header-content-area">
                        <div className="perfect-scroll">
                            <div className="mobile-menu-wrap mobile-header-border">
                                <nav>
                                    <ul className="mobile-menu font-heading">
                                        <li className={isActive.key == 1 ? "has-children active" : "has-children"}>
                                            <span onClick={() => handleToggle(1)} className="menu-expand"></span>
                                            <Link href="#" legacyBehavior><a className="active">Home</a></Link>
                                        </li>
                                        <li className={isActive.key == 2 ? "has-children active" : "has-children"}>
                                            <span onClick={() => handleToggle(2)} className="menu-expand"></span>
                                            <Link href="#" legacyBehavior><a>About Us</a></Link>
                                        </li>
                                        <li className={isActive.key == 3 ? "has-children active" : "has-children"}>
                                            <span onClick={() => handleToggle(3)}  className="menu-expand"></span>
                                            <Link href="#" legacyBehavior><a>Case Studies</a></Link>

                                        </li>
                                        <li className={isActive.key == 4 ? "has-children active" : "has-children"}>
                                            <span onClick={() => handleToggle(4)}  className="menu-expand"><i className="fi-rr-angle-small-down"></i></span>

                                            <Link href="/#" legacyBehavior><a>Services</a></Link>
                                            <ul className={isActive.key == 4 ? "sub-menu d-block" : "sub-menu d-none"}>
                                                <li>
                                                    <Link href="#" legacyBehavior><a>Behavioural Analytics</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="#" legacyBehavior><a>Innovation</a></Link>
                                                </li>
                                                <li>
                                                    <Link href="#" legacyBehavior><a>Design</a></Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className={isActive.key == 5 ? "has-children active" : "has-children"}>
                                            <span onClick={() => handleToggle(5)}  className="menu-expand"></span>
                                            <Link href="#" legacyBehavior><a>Resources</a></Link>
                                        </li>
                                        <li className={isActive.key == 6 ? "has-children active" : "has-children"}>
                                            <span onClick={() => handleToggle(6)}  className="menu-expand"></span>
                                            <Link href="#" legacyBehavior><a>Contact</a></Link>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="site-copyright color-gray-400">
                                Copyright 2022 © Agon - Agency Template.<br />Designed
                                by
                                <Link href="http://alithemes.com" legacyBehavior><a>&nbsp; AliThemes</a></Link>
                            </div>
                        </div>
                    </div>
                </PerfectScrollbar>
            </div>

        </>
    );
};

export default Sidebar;