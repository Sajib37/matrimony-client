import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useBiodata from "../../Hooks/useBiodata";
import Loader from "../../Components/Loader";
import { Helmet } from "react-helmet-async";
import MemberCard from "../../Components/MemberCard";
import { AwesomeButton } from "react-awesome-button";
import 'react-awesome-button/dist/styles.css';
import { Button } from "flowbite-react";
import { GiRoyalLove } from "react-icons/gi";

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
                <h1 className="text-center text-3xl md:text-4xl font-bold text-Primary mb-4">Profile of <span className="text-blue-800">{profileInfo.name}</span></h1>
                
                <section className="">
                    <div className=" ">
                        <img className="w-60 h-60 md:w-72 md:h-72 border-4 border-black rounded-full mx-auto" src={profileInfo.photo} alt="" />
                        <div className="text-center">
                            <h1 className="text-xl font-bold text-Accent">Biodata ID: { profileInfo.biodataId}</h1>
                            <h1 className="font-bold">Full Name: {profileInfo.name}</h1>
                            <h1 className="font-bold">Occupatio: { profileInfo.occupation}</h1>
                            
                        </div>
                    </div>

                    <div className="mt-6 grid px-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div>
                            <h1 className="text-xl md:text-2xl font-bold mb-1 font-Lato text-blue-800">Parents Name:</h1>
                            <h2 className="font-semibold">Father Name: { profileInfo.fathersName}</h2>
                            <h2 className="font-semibold">Mother Name: { profileInfo.mothersName}</h2>
                        </div>
                            
                        <div>
                            <h1 className="text-xl md:text-2xl font-bold mb-1 font-Lato text-blue-800">Address:</h1>    
                            <h2 className="font-semibold">Permanent Division: { profileInfo.permanentDivision}</h2>
                            <h2 className="font-semibold">Present Division: { profileInfo.presentDivision}</h2>
                        </div>

                        <div>
                            <h1 className="text-xl md:text-2xl font-bold mb-1 font-Lato text-blue-800">Fitness:</h1>
                            <h2 className="font-semibold">Height: { profileInfo.height}</h2>
                            <h2 className="font-semibold">Wieght: { profileInfo.weight}</h2>
                        </div>

                        <div>
                            <h1 className="text-xl md:text-2xl font-bold mb-1 font-Lato text-blue-800">Others Info:</h1>
                            <h2 className="font-semibold">Age: {profileInfo.age} Years</h2>
                            <h2 className="font-semibold">DOB: { profileInfo.dob}</h2>
                            <h2 className="font-semibold">Race: { profileInfo.race}</h2>
                        </div>

                        <div>
                            <h1 className="text-xl md:text-2xl font-bold mb-1 font-Lato text-blue-800">Partner Quality Criteria:</h1>

                            <h2 className="font-semibold">Partner Age: { profileInfo.partnerAge} Years</h2>
                            <h2 className="font-semibold">Partner Height: { profileInfo.partnerHeight}</h2>
                            <h2 className="font-semibold">Partner Weight: { profileInfo.partnerWeight}</h2>
                        </div>

                        <div>
                            <h1 className="text-xl md:text-2xl font-bold mb-1 font-Lato text-blue-800">Contact Information:</h1>

                            {/* TODO Condition aplly for premium members */}
                            <div>
                                <h1 className="text-red-600 font-semibold text-sm mt-2">Unlock exclusive contact details with a premium membership.</h1>
                                <AwesomeButton  type="secondary">Request for contact info.</AwesomeButton>
                            </div>
                        </div>
                    </div>
                </section>

                <Button className="mt-6 mx-auto" color="warning">Add to favourite <GiRoyalLove className="text-2xl ml-2" /></Button>
            </section>

            <section className=" mt-10 lg:mt-0 lg:mr-10 w-full lg:w-[40%]">
                <div className="bg-white  mb-4">
                    <h1 className="text-xl md:text-2xl text-Secondary font-semibold lg:mt-0 p-2 text-center">Recommended Biodatas</h1>
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
