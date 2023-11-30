import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main';
import Home from '../../Pages/Main/Home/Home';
import Biodata from '../../Pages/Main/Biodata/Biodata';
import ContactUs from '../../Pages/Main/ContactUs/ContactUs';
import AboutUs from '../../Pages/Main/AbouUs/AboutUs';
import Login from '../../Pages/Main/Login/Login';
import Register from '../../Pages/Main/Register/Register';
import Dashboard from '../../Layout/Dashboard';

const router = createBrowserRouter([
    {
      path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/biodata",
                element: <Biodata></Biodata>,
            },
            {
                path: "/contact",
                element: <ContactUs></ContactUs>
            },
            {
                path: "/about",
                element:<AboutUs></AboutUs>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element:<Register></Register>
            }
        ],

    },

    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            
        ]
    }
  ]);

export default router;