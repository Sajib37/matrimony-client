import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useBiodata from "../../Hooks/useBiodata";
import Loader from "../../Components/Loader";
import { Helmet } from "react-helmet-async";
import MemberCard from "../../Components/MemberCard";

const Profile = () => {
    const { email } = useParams();

    const [profileInfo, setProfileInfo] = useState({})
    const [recommenedBiodata, setRecommenedBiodata] = useState([])

    const [biodata, isLoading] = useBiodata();

    useEffect(() => {
        if (biodata) {
            const profileData = biodata.find(bio => bio.email === email);
            setProfileInfo(profileData);
            if (profileInfo) {
                const displayData = biodata.filter(bio => bio.type === profileData.type && bio.biodataId !== profileData.biodataId)
                setRecommenedBiodata(displayData)
            }
        }
    }, [email, biodata]);

    if (isLoading) {
        return <Loader></Loader>;
    }
    console.log(profileInfo)

    return (
        <section className="mt-14 py-10 flex flex-col lg:flex-row justify-between gap-2 bg-gray-200 ">
            <Helmet>
                <title>Matrimony || Profile Info</title>
            </Helmet>

            <section className="w-full">
                <h1 className="text-center text-4xl font-bold text-Secondary mb-4">Profile of { profileInfo.name}</h1>
                <img className="w-96 h-96 rounded-full mx-auto" src={profileInfo.photo} alt="" />
            </section>

            <section className=" w-full lg:w-[40%]">
                <div className="bg-white lg:mr-2">
                    <h1 className="text-xl md:text-2xl text-Secondary font-semibold my-4 mt-6 lg:mt-0 p-2 text-center">Recommended Biodatas</h1>
                </div>

                <div className="h-[120vh] grid grid-cols-1 gap-4 lg:grid-cols-1 md:grid-cols-2 overflow-auto">
                    {
                        recommenedBiodata.map((bio,idx)=><MemberCard key={idx} biodata={bio}></MemberCard>)
                    }
                </div>
            </section>

        </section>
    );
};

export default Profile;
