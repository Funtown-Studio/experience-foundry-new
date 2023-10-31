import { Parallax, ParallaxLayer } from "@react-spring/parallax";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState, useEffect } from "react";

const HeroAbout = () => {
    return (
        <Parallax pages={1} scrolling={true}>
            <ParallaxLayer offset={0} speed={1}>
                <img className="" src="assets/imgs/page/about/1/clouds.png" alt="clouds" />
            </ParallaxLayer>
        </Parallax>
    );
};

export default HeroAbout;
