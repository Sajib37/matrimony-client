import { Helmet } from "react-helmet-async";
import Sidebar from "../Shared/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <section className="bg-white text-Normal">
            <Helmet>
                <title>Bistro Boss || Dashboard</title>
            </Helmet>

            <div className="flex ">
                <Sidebar></Sidebar>
                <Outlet></Outlet>
            </div>
                       
        </section>
    );
};

export default Dashboard;