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
import Swal from 'sweetalert2';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';

const ViewBiodata = () => {

    const { user } = useAuth();
    
    const [biodata, isLoading] = useBiodata();
    const [profileInfo, setProfileInfo] = useState({})

    

    const axiosPublic =useAxiosPublic()

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

    const handleRequest = (profile) => {
        const requesterData = {
            name: profile.name,
            email: profile.email,
            biodataId : profile.biodataId
        }

        Swal.fire({
            title: "Are you sure to make premium?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, make premium!"
        }).then((result) => {
              
            if (result.isConfirmed) {

                axiosPublic.post("/premium", requesterData)
                    .then(res => {
                        if (res.data.meassage === 'already requested') {
                            Swal.fire({
                                icon: "error",
                                title: "Oops...",
                                text: "You already requested . wait for the admin response",                               
                              });
                        }
                        else {
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Your requested send to the Admin",
                                showConfirmButton: false,
                                timer: 1500
                              });
                        }
                    })
                    .catch(err => console.log(err))
                

              }          
          });
    }
    // 

    return (
        <section className='w-full'>
            <Helmet>
                <title>Matrimony || View Biodata</title>
            </Helmet>


            {
                profileInfo ?
                <section className="w-full my-10">
                <h1 className="text-center text-3xl md:text-4xl font-bold text-Accent mb-4">Identity Canvas</h1>
                
                <section className="">
                    <div className=" ">
                        <img className="w-52 h-52 md:w-60 md:h-60 border-4 border-black rounded-full mx-auto" src={profileInfo.photo} alt="" />
                        <div className="text-center">
                            <h1 className="text-xl font-bold text-Accent">Biodata ID: { profileInfo.biodataId}</h1>
                            <h1 className="font-bold text-lg">Full Name: {profileInfo.name}</h1>
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

                <div className='flex justify-center mt-8 text-lg'><span onClick={()=>handleRequest(profileInfo)}><AwesomeButton  type="secondary">Request for premium member</AwesomeButton></span></div>
                    </section>

                    :
                    <h1 className='text-2xl font-bold text-red-500 text-center mt-20'>......Opps !! You did not create your profile yet. Create a profile first.....</h1>
            }
            
        </section>
    );
};

export default ViewBiodata;