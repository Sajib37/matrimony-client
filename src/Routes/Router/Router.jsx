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
import CreateBiodata from '../../Pages/Dashboard/CreateBiodata/CreateBiodata';
import ViewBiodata from '../../Pages/Dashboard/ViewBiodata/ViewBiodata';
import FavouriteBiodata from '../../Pages/Dashboard/FavouriteBiodata/FavouriteBiodata';
import ContactRequest from '../../Pages/Dashboard/ContactRequest/ContactRequest';
import Profile from '../../Shared/Profile/Profile';

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
            },
            {
                path: "/profile/:email",
                element:<Profile></Profile>
            }
        ],

    },

    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: "createBiodata",
                element:<CreateBiodata></CreateBiodata>
            },
            {
                path: "viewBiodata",
                element:<ViewBiodata></ViewBiodata>
            },
            {
                path: "favouriteBiodata",
                element: <FavouriteBiodata></FavouriteBiodata>
            },
            {
                path: "contactRequest",
                element:<ContactRequest></ContactRequest>
            }
        ]
    }
  ]);

export default router;