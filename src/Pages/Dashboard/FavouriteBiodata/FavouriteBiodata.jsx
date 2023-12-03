import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useAuth } from '../../../AuthProvider/AuthProvider';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import { useState } from 'react';
import { useEffect } from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import { MdDelete } from 'react-icons/md';
import Swal from 'sweetalert2';
import { useQuery } from '@tanstack/react-query';
import Loader from '../../../Components/Loader';

const FavouriteBiodata = () => {

    const { user , loading } = useAuth();
    const axiosPublic = useAxiosPublic();
    // const [profiles, setProfiles] = useState([])
    
    // useEffect(() => {
    //     if (user.email) {
    //         axiosPublic.get(`/favourite/${user.email}`)
    //             .then(res => setProfiles(res.data))
    //             .catch(err => console.log(err))
            
    //     }
    // }, [user.email])

    const { data: profiles, isLoading: loadProfiles , refetch } = useQuery({
        queryKey: ['profiles', user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
            if (user?.email) {
                const res = await axiosPublic.get(`/favourite/${user.email}`);
                // console.log(res.data)
                return res.data;
            }
        },
    });

    if (loading && loadProfiles) {
        return <Loader></Loader>
    }

    console.log(profiles)


    const handleDelet = (profile) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You can again to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
              
            if (result.isConfirmed) {
                axiosPublic.delete(`/favourite/${profile.biodataId}/${profile.email}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                        }
                    })
                    .catch(err => console.log(err))
              }          
          });
    }
    return (
        <section className='py-10 lg:py-14 w-full min-h-screen bg-[#F6F6F6]'>
            <Helmet>
                <title>Matrimony || My Favourite Biodatas</title>
            </Helmet>
            
            <section className=" px-1">
                <SectionTitle  subHeading={'Your Handpicked Selections'} heading={'Favorite Profiles'}></SectionTitle>    
                <div className="lg:w-[70%] bg-white py-6 md:py-8 lg:py-10 px-1 md:px-8 lg:px-10  w-full md:w-[90%]  mx-auto ">
 
                    {
                        profiles && <h1 className="text-2xl font-bold">Total Favourite Profile: { profiles.length}</h1>
                    }

                    <table className=" w-full mt-8">
                        <thead>
                            <tr className="bg-[#ff5a60] text-white">
                                <th className="py-2 lg:text-lg mx-auto">Name</th>
                                <th className="py-2 lg:text-lg mx-auto">Id</th>
                                <th className="py-2 lg:text-lg mx-auto">Adrress</th>
                                <th className="py-2 lg:text-lg mx-auto">Occuption</th>                              
                                <th className="py-2 lg:text-lg mx-auto" >Delet</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                profiles &&
                                profiles.map((profile, idx) =>
                                    <tr key={idx} className={idx % 2 == 0 ? "bg-white" : "bg-gray-100"}>
                                        <td className="py-2 md:font-semibold text-center">{ profile.name}</td>
                                        <td className="py-2 md:font-semibold text-center">{ profile.biodataId}</td>
                                        <td className="py-2 md:font-semibold text-center">{profile.permanentDivision}</td>
                                        <td className="py-2 md:font-semibold text-center">{profile.occupation}</td>            
                                        <td className="py-2 md:font-semibold text-center"><MdDelete onClick={()=>handleDelet(profile)} className="mx-auto text-xl text-red-700" /></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>

                </div>
            </section>
        </section>
    );
};

export default FavouriteBiodata;