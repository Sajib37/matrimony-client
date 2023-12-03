import React from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle";
import useBiodata from "../../../Hooks/useBiodata";
import Loader from "../../../Components/Loader";
import { PieChart } from "@mui/x-charts/PieChart";
import { useEffect } from "react";
import { useState } from "react";

const AdminHome = () => {
    const [biodata, isLoading] = useBiodata();

    const [male, setMale] = useState([]);
    const [female, setFeamle] = useState([]);
    const [premium, setPremium] = useState([]);
    const [total, setTotal] = useState([]);

    const [chartWidth, setChartWidth] = useState(400);
    if (isLoading) {
        return <Loader></Loader>;
    }

    useEffect(() => {
        if (biodata) {
            const female = biodata.filter((bio) => bio.type === "female");
            const male = biodata.filter((bio) => bio.type === "male");
            const premium = biodata.filter((bio) => bio.member === "premium");
            setFeamle(female);
            setMale(male);
            setPremium(premium);
            setTotal(biodata);
        }
    }, [biodata]);

    return (
        <section className="pt-10 w-full bg-regular min-h-screen">
            <Helmet>
                <title>Matrimony || Admin Dashboard</title>
            </Helmet>
            <SectionTitle
                heading={"Welcome Back !!"}
                subHeading={"Reconnect and Rediscove"}
            ></SectionTitle>
            <section className="w-full gap-4 mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-evenly  px-2">
                <div className="w-64 h-40 mx-auto flex flex-col items-center justify-center bg-gradient-to-r from-violet-500 to-fuchsia-500">
                    <h1 className="text-white text-5xl font-Lato font-bold mb-3">
                        Total:
                    </h1>
                    <h1 className="text-white text-4xl font-Lato font-bold">
                        {total.length}
                    </h1>
                </div>
                <div className="w-64 h-40 mx-auto flex flex-col items-center justify-center bg-gradient-to-r from-red-600 to-orange-300">
                    <h1 className="text-white text-5xl font-Lato font-bold mb-3">
                        Male:
                    </h1>
                    <h1 className="text-white text-4xl font-Lato font-bold">
                        {male.length}
                    </h1>
                </div>
                <div className="w-64 h-40 mx-auto flex flex-col items-center justify-center bg-gradient-to-r from-teal-500 to-purple-400">
                    <h1 className="text-white text-5xl font-Lato font-bold mb-3">
                        Female:
                    </h1>
                    <h1 className="text-white text-4xl font-Lato font-bold">
                        {female.length}
                    </h1>
                </div>
                <div className="w-64 h-40 mx-auto flex flex-col items-center justify-center bg-gradient-to-r from-yellow-400 to-lime-500">
                    <h1 className="text-white text-5xl font-Lato font-bold mb-3">
                        Premium:
                    </h1>
                    <h1 className="text-white text-4xl font-Lato font-bold">
                        {premium.length}
                    </h1>
                </div>
            </section>

            <section className="mx-auto  flex flex-col justify-center items-center py-10">
                <h1 className="text-3xl text-Accent font-bold">
                    Graphical Representation
                </h1>
                <PieChart
                    series={[
                        {
                            data: [
                                { id: 0, value: total.length, label: "Total" },
                                { id: 1, value: male.length, label: "Male" },
                                { id: 2, value: female.length, label: "Female" },
                                { id: 3, value: premium.length, label: "Premium" },
                            ],
                        },
                    ]}
                    width={400}
                    height={200}
                />
            </section>
        </section>
    );
};

export default AdminHome;
