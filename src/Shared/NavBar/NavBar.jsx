import { Navbar } from 'flowbite-react';
import logo from '/logo.png'
import toast, { Toaster } from 'react-hot-toast';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../AuthProvider/AuthProvider';
import { useEffect, useState } from 'react';
import useAdmin from '../../Hooks/useAdmin';

const NavBar = () => {
    const { user , logOut} = useAuth()
    // console.log(user)
    const [isAdmin, loadAdmin] = useAdmin();

    const [photo, setPhoto] = useState(null);
    const [name, setName] = useState(null)
    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            setName(user.displayName?user.displayName :'User')
            if (user.photoURL) {
                setPhoto(user.photoURL)
            }
            else {
                setPhoto('https://i.ibb.co/bBT6RPm/pngwing-com.png')
            }
        }
    }, [user])

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

    return (
        <div className='fixed top-0 z-40 w-full bg-[#ff5a60]'>
            <Toaster></Toaster>
            <Navbar fluid rounded className=' bg-transparent max-w-screen-xl mx-auto text-white'>
                    <Navbar.Brand className="md:mx-auto lg:mx-0 md:mb-2 lg:mb-0"  href="#">
                        <img src={logo} className="mr-1 h-6 sm:h-9 " alt="Flowbite React Logo" />
                        <span className="self-center whitespace-nowrap text-2xl text-white font-semibold font-mono">Matrimony</span>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="md:mx-auto lg:mx-0">
                        <NavLink to="/" className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "underline underline-offset-4 text-Primary font-bold mb-2" : "mb-2"}>
                            Home
                        </NavLink>
                        <NavLink to="/biodata" className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "underline underline-offset-4 text-Primary font-bold mb-2" : "mb-2"}>
                            Biodatas
                        </NavLink>
                        <NavLink to="/about" className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "underline underline-offset-4 text-Primary font-bold mb-2" : "mb-2"}>
                            About us
                        </NavLink>
                        <NavLink to="/contact" className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "underline underline-offset-4 text-Primary font-bold mb-2" : "mb-2"}>
                            Conatct us
                        </NavLink>

                        {
                            user ? 
                                <>
                                    {
                                    isAdmin ?
                                        <NavLink to="dashboard/AdminHome" className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "underline underline-offset-4 text-Primary font-bold mb-2" : "mb-2"}>
                                            Admin Home
                                        </NavLink>
                                        :
                                        <NavLink to="dashboard/userHome" className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "underline underline-offset-4 text-Primary font-bold mb-2" : "mb-2"}>
                                            User Home
                                        </NavLink>
                                    }
                                    <p onClick={handleLogOut} className="inline w-20 hover:text-Primary hover:cursor-pointer">Log Out</p>
                                    {photo && <div className="mt-2 md:mt-0 flex gap-2 items-center md:items-start md:flex-row-reverse">
                                        
                                        <img className=" w-9 h-9 md:h-7 md:w-7 rounded-full" src={photo} alt="" />
                                        <p>{ name}</p>
                                    </div>}
                                </>
                            :
                                <NavLink to="/login" className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "underline underline-offset-4 text-Primary font-bold mb-2" : "mb-2"}>
                                    Login
                                </NavLink>
        
                        }
                    </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar;