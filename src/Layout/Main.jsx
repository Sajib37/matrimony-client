import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";
import { useEffect } from "react";
import Foot from "../Shared/Foot/Foot";




const Main = () => {
    const pathname= useLocation()
    useEffect(() => {
        window.scrollTo(0,0)
    }, [pathname])

    return (
        <section className="bg-white font-inter text-Normal">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Foot></Foot>
        </section>
    );
};

export default Main;