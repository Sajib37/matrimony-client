import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useAuth } from '../../../AuthProvider/AuthProvider';
import Loader from '../../../Components/Loader';
import useBiodata from '../../../Hooks/useBiodata';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button } from 'flowbite-react';
import { GiRoyalLove } from 'react-icons/gi';
import { AwesomeButton } from 'react-awesome-button';

const ViewBiodata = () => {

    const { user } = useAuth();
    
    const [biodata, isLoading] = useBiodata();
    const [profileInfo, setProfileInfo] = useState({})

    useEffect(() => {
        if (biodata && user.email) {
            const profileData = biodata.find(bio => bio.email === user.email);
            setProfileInfo(profileData);
        }
    }, [user.email, biodata]);

    if (isLoading) {
        return <Loader></Loader>;
    }

    console.log(profileInfo)

    return (
        <section className='w-full'>
            <Helmet>
                <title>Matrimony || View Biodata</title>
            </Helmet>


            <section className="w-full my-10">
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

                            <h2 className="font-semibold">Phone: { profileInfo.phone}</h2>
                            <h2 className="font-semibold">Email: { profileInfo.email}</h2>
                            
                        </div>
                    </div>
                </section>

                <div className='flex justify-center mt-8 text-lg'><AwesomeButton  type="secondary">Request for premium member</AwesomeButton></div>
            </section>
            
        </section>
    );
};

export default ViewBiodata;