/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from 'next/image';
import { useState, useEffect } from "react";
import HeaderDark from "./HeaderDark";
import Sidebar from "./Sidebar";


const HeroNeuro = ({headerStyle}) => {
    const [openClass, setOpenClass] = useState('');


    const handleOpen = () => {
        document.body.classList.add("mobile-menu-active");
        setOpenClass("sidebar-visible")
    }

    const handleRemove = () => {
        if (openClass === "sidebar-visible") {
            setOpenClass("")
            document.body.classList.remove("mobile-menu-active");
        }
    }

    return (
        <>
            <section className="section-box">
                <div className="banner-neuro neuro-main gradient-bg">
                    <div className="clouds-container">
                    </div>
                    <div className={openClass && "body-overlay-1"} onClick={handleRemove} />

                    <HeaderDark handleOpen={handleOpen} headerStyle={headerStyle} />
                    <Sidebar openClass={openClass} />
                </div>
            </section>

            <section className="section-box neuro-gradient-bg">
                 <div className="container mb-100">
                    <div className="image-overlay text-center frontfacing mt-30">
                        <Image src="/assets/imgs/page/neuro/neuroemote.svg" className="neuro-img-main" alt="NeuroEmote Logo" width={500} height={50} />
                    </div>
                    <div className="mt-50 text-center mb-100 just-italic">
                        <p>Decode Emotions, Elevate Experiences</p>
                    </div>        
                 </div>
                    </section>
        </>
    );
};

export default HeroNeuro;
