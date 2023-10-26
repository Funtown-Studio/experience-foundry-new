/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState, useEffect } from "react";
const SubNav = ({ handleOpen, headerStyle }) => {
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

            <div className="sub-nav">
                  <li className="sub-nav-buttons mr-20">
                    <Link href="/page-about-2" legacyBehavior><a className="btn btn-default-subnav subv-nav-btns ml-10">Quantitative analysis</a></Link>
                  </li>
                  <li className="sub-nav-buttons mr-20">
                  <Link href="/page-about-2" legacyBehavior><a className="btn btn-default-subnav subv-nav-btns">Data</a></Link>
                  </li>
                  <li className="sub-nav-buttons">
                  <Link href="/page-about-2" legacyBehavior><a className="btn btn-default-subnav subv-nav-btns">Behavioural science</a></Link>
                  </li>

            </div>

    </>
  );
};

export default SubNav;