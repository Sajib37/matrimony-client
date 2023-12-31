import { useState, useEffect } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import {  MdEmail  } from "react-icons/md";
import { FaDatabase, FaDiagramSuccessor } from "react-icons/fa6";
import { MdOutlineMedicalInformation ,MdContacts ,MdFavorite ,MdDashboard ,MdManageAccounts ,MdApproval ,MdOutlineRequestQuote } from "react-icons/md";
import { IoCreateSharp } from "react-icons/io5";
import { LuView } from "react-icons/lu";
// import useAdmin from "../../../hooks/useAdmin";

import { Button } from "flowbite-react";
import { useAuth } from "../../AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import useAdmin from "../../Hooks/useAdmin";
import Loader from "../../Components/Loader";
import useAxiosPublic from "../../Hooks/useAxiosPublic";


const Sidebar = () => {

    const { logOut, user } = useAuth()
    const axiosPublic = useAxiosPublic();

    const navigate = useNavigate()
    const [open, setOpen] = useState(window.innerWidth >= 1024);

    // TODO : get admin from databse
    const [isAdmin, loadAdmin] = useAdmin()

    // console.log(isAdmin)
    const [singleBio, setSingleBio] = useState({});
    useEffect(() => {
        if (user) {
            axiosPublic.get(`/biodata/${user?.email}`)
                .then(res => setSingleBio(res.data))
                .catch(err => console.log(err))
            
        }
    },[user])


    const handleLogOut = () => {
        logOut()
            .then(result => {
                toast.success('Log Out Successfull')
                navigate('/')
                
            })
            .catch(error => {
            toast.error('Log Out Failed !!')
        })
    }

    const handleOpen = () => {
        if (window.innerWidth < 1024) {
            setOpen(!open);
        }
    };

    useEffect(() => {
        const handleResize = () => {
            setOpen(window.innerWidth >= 1024);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    if (loadAdmin) {
        <Loader></Loader>
    }

    return (
        <section className="">
            <button onClick={handleOpen} className="text-3xl text-[#D1A054] fixed top-2 left-2">
                <RiMenu2Fill />
            </button>
            <Toaster></Toaster>
            <div className="w-72 h-screen bg-white hidden lg:block">

            </div>

            <aside
                onClick={handleOpen}
                className={`w-72 fixed top-0 z-20 left-0  bg-[#ff5a60] border-r-4  border-[#aa2b30] text-[#333333] pt-4 h-screen transition-transform duration-700 ease-in-out ${
                    open ? "translate-x-0" : "-translate-x-full"
                    }`}
                    style={{ overflowY: 'auto' }}
            >
                <div className=" flex flex-col mb-8 items-center">
                    <h1 className="text-3xl font-bold font-Lato text-blue-800">Matrimony</h1>
                    
                </div>

                <section className="flex flex-col gap-4 text-white">
                    {
                        isAdmin ? 
                        <>
                                <NavLink to='adminHome' className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "text-black" : "mb-2"}>
                                    <div className="flex gap-2 w-56 mx-auto">
                                        <span className="text-2xl"><MdDashboard /></span>
                                        <h1 className="md:text-base font-semibold text-sm  uppercase">Admin Dashboard</h1>
                                    </div>
                                </NavLink>

                                <NavLink to='manage' className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "text-black" : "mb-2"}>
                                    <div className="flex gap-2 w-56 mx-auto ">
                                        <span className="text-2xl"><MdManageAccounts /></span>
                                        <h1 className="md:text-base font-semibold text-sm  uppercase">manage users</h1>
                                    </div>
                                </NavLink>

                                <NavLink to='approvedPremium' className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "text-black" : "mb-2"}>
                                    <div className="flex gap-2 w-56 mx-auto">
                                        <span className="text-2xl"><MdApproval /></span>
                                        <h1 className="md:text-base font-semibold text-sm  uppercase">Approve premium</h1>
                                    </div>
                                </NavLink>

                                <NavLink to='approvedRequest' className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "text-black" : "mb-2"}>
                                    <div className="flex gap-2 w-56 mx-auto">
                                        <span className="text-2xl"><MdOutlineRequestQuote /></span>
                                        <h1 className="md:text-base font-semibold text-sm  uppercase">Approve request</h1>
                                    </div>
                                </NavLink>
                                <NavLink to='showStory' className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "text-black" : "mb-2"}>
                                    <div className="flex gap-2 w-56 mx-auto">
                                        <span className="text-2xl"><FaDiagramSuccessor /></span>
                                        <h1 className="md:text-base font-semibold text-sm  uppercase">Success Story</h1>
                                    </div>
                                </NavLink>

                                <Button onClick={handleLogOut} color="dark" className="w-[80%] mx-auto">Log Out</Button>

                            </>
                            :
                            <>
                                <NavLink to='userHome' className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "text-black" : "mb-2"}>
                                    <div className="flex gap-2 w-56 mx-auto">
                                        <span className="text-2xl"><FaHome /></span>
                                        <h1 className="md:text-base font-semibold text-sm  uppercase">Got married</h1>
                                    </div>
                                </NavLink>

                                <NavLink to='createBiodata' className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "text-black" : "mb-2"}>
                                    <div className="flex gap-2 w-56 mx-auto">
                                        <span className="text-2xl"><IoCreateSharp /></span>
                                        {
                                            singleBio ? <h1 className="md:text-base font-semibold text-sm  uppercase">Edit Biodata</h1>
                                                : <h1 className="md:text-base font-semibold text-sm  uppercase">Create Biodata</h1>
                                        }
                                    </div>
                                </NavLink>

                                <NavLink to='viewBiodata' className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "text-black" : "mb-2"}>
                                    <div className="flex gap-2 w-56 mx-auto">
                                        <span className="text-2xl"><LuView /></span>
                                        <h1 className="md:text-base font-semibold text-sm  uppercase">View My biodata</h1>
                                    </div>
                                </NavLink>

                                <NavLink to='contactRequest' className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "text-black" : "mb-2"}>
                                    <div className="flex gap-2 w-56 mx-auto">
                                        <span className="text-2xl"><MdContacts /></span>
                                        <h1 className="md:text-base font-semibold text-sm  uppercase">my Contact request</h1>
                                    </div>
                                </NavLink>

                                <NavLink to='favouriteBiodata' className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "text-black" : "mb-2"}>
                                    <div className="flex gap-2 w-56 mx-auto">
                                        <span className="text-2xl"><MdFavorite /></span>
                                        <h1 className="md:text-base font-semibold text-sm  uppercase">Favourite biodata</h1>
                                    </div>
                                </NavLink>

                                <Button onClick={handleLogOut} color="dark" className="w-[80%] mx-auto">Log Out</Button>

                            </>
                    }
                    
                </section>

                <hr className="my-8 border-[#929191]" />

                <section className="flex flex-col gap-4 text-white">
                    <NavLink to='/' className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "text-black" : "mb-2"}>
                        <div className="flex gap-2 w-56 mx-auto">
                            <span className="text-2xl"><FaHome /></span>
                            <h1 className="md:text-base font-semibold text-sm  uppercase"> Home</h1>
                        </div>
                    </NavLink>

                    <NavLink to='/biodata' className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "text-black" : "mb-2"}>                        
                        <div className="flex gap-2 w-56 mx-auto">
                            <span className="text-2xl"><FaDatabase></FaDatabase></span>
                            <h1 className="md:text-base font-semibold text-sm  uppercase"> Biodatas</h1>
                        </div>
                    </NavLink>

                    <NavLink to='/about' className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "text-black" : "mb-2"}>                       
                        <div className="flex gap-2 w-56 mx-auto">
                            <span className="text-2xl"><MdOutlineMedicalInformation /></span>
                            <h1 className="md:text-base font-semibold text-sm  uppercase"> About Us</h1>
                        </div>
                    </NavLink>

                    <NavLink to='/contact' className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "text-black" : "mb-2"}>
                        <div className="flex gap-2 w-56 mx-auto">
                            <span className="text-2xl"><MdEmail /></span>
                            <h1 className="md:text-base font-semibold text-sm  uppercase"> Contact us</h1>
                        </div>
                    </NavLink>
                </section>
            </aside>
        </section>
    );
};

export default Sidebar;