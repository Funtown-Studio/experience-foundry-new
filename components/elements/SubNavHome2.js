/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState, useEffect } from "react";

const SubNavHome2 = ({ handleOpen, headerStyle }) => {
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

            <div className="sub-nav-home2">
                  <li className="sub-nav-buttons">
                    <Link href="/page-about-2" legacyBehavior><a className="btn btn-default-subnav-home2 subv-nav-btns ml-10">Data</a></Link>
                  </li>
                  <li className="sub-nav-buttons">
                  <Link href="/page-about-2" legacyBehavior><a className="btn btn-default-subnav-home2 subv-nav-btns">Innovation</a></Link>
                  </li>
                  <li className="sub-nav-buttons">
                  <Link href="/page-about-2" legacyBehavior><a className="btn btn-default-subnav-home2 subv-nav-btns ml-10">Storytelling</a></Link>
                  </li>

            </div>

    </>
  );
};

export default SubNavHome2;