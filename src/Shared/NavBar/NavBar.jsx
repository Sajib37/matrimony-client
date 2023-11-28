import { Navbar } from 'flowbite-react';
import logo from '/logo.png'
import { Toaster } from 'react-hot-toast';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

    return (
        <div className='fixed top-0 z-40 w-full bg-[#191970]'>
            <Toaster></Toaster>
            <Navbar fluid rounded className=' bg-transparent max-w-screen-xl mx-auto text-white'>
                    <Navbar.Brand className="md:mx-auto lg:mx-0 md:mb-2 lg:mb-0"  href="#">
                        <img src={logo} className="mr-1 h-6 sm:h-9 " alt="Flowbite React Logo" />
                        <span className="self-center whitespace-nowrap text-xl font-semibold">Matrimony</span>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="md:mx-auto lg:mx-0">
                        <NavLink to="/" className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "underline underline-offset-4 text-red-600 mb-2" : "mb-2"}>
                            Home
                        </NavLink>
                        <NavLink to="/biodata" className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "underline underline-offset-4 text-red-600 mb-2" : "mb-2"}>
                            Biodatas
                        </NavLink>
                        <NavLink to="/about" className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "underline underline-offset-4 text-red-600 mb-2" : "mb-2"}>
                            About us
                        </NavLink>
                        <NavLink to="/contact" className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "underline underline-offset-4 text-red-600 mb-2" : "mb-2"}>
                            Conatct us
                        </NavLink>
                        <NavLink to="/login" className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "underline underline-offset-4 text-red-600 mb-2" : "mb-2"}>
                            Login
                        </NavLink> 
                    

                    {/* TODO  */}
                    
                        {/* <NavLink to="/register" className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "underline underline-offset-4 text-red-600 mb-2" : "mb-2"}>
                            Register
                        </NavLink>  
                        <NavLink to="dashboard" className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "underline underline-offset-4 text-red-600 mb-2" : "mb-2"}>
                            Dashboard
                        </NavLink>   */}
                    </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar;