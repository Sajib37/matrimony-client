import { Outlet } from "react-router-dom";
import NavBar from "../Shared/NavBar/NavBar";


const Main = () => {
    return (
        <section>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </section>
    );
};

export default Main;