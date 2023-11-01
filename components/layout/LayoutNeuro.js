import { useState } from 'react';
import BackToTop from "../elements/BackToTop";
import Footer from "./Footer";
import HeaderDark from "./HeaderDark";
import Sidebar from "./Sidebar";

const Layout = ({ children, headerStyle }) => {
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
            <div  className={openClass && "body-overlay-1"} onClick={handleRemove} />

            <HeaderDark handleOpen={handleOpen} headerStyle={headerStyle} />
            <Sidebar openClass={openClass} />
            <main className="main">
                {children}
            </main>
            <BackToTop/>
        </>
    );
};

export default Layout;