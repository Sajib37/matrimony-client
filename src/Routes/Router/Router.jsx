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
import ApprovedPremium from '../../Pages/Dashboard/approvedPremium/approvedPremium';
import ManageUser from '../../Pages/Dashboard/ManageUser/ManageUser';
import PrivateRouter from '../PrivateRouter/PrivateRouter';
import AdminRoute from '../AdminRoute/AdminRoute';
import AdminHome from '../../Pages/Dashboard/AdminHome/AdminHome';
import UserHome from '../../Pages/Dashboard/UserHome/UserHome';
import ApprovedRequest from '../../Pages/Dashboard/ApprovedRequest/ApprovedRequest';
import SuccessStory from '../../Pages/Dashboard/SuccessStory/SuccessStory';
import ViewStory from '../../Pages/Dashboard/ViewStory/ViewStory';
import ErrorPage from '../../Pages/ErrorPage/ErrorPage';

const router = createBrowserRouter([
    {
      path: "/",
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
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
                path: "/profile/:id",
                // element:<PrivateRouter><Profile></Profile></PrivateRouter>
                element:<PrivateRouter><Profile></Profile></PrivateRouter>
            },
        ],

    },

    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            
            // user routes
            {
                path: "userHome",
                element: <UserHome></UserHome>
            },

            {
                path: "createBiodata",
                element:<PrivateRouter><CreateBiodata></CreateBiodata></PrivateRouter>
            },
            {
                path: "viewBiodata/",
                element:<PrivateRouter><ViewBiodata></ViewBiodata></PrivateRouter>
            },
            {
                path: "favouriteBiodata",
                element: <PrivateRouter><FavouriteBiodata></FavouriteBiodata></PrivateRouter>
            },
            {
                path: "contactRequest",
                element:<PrivateRouter><ContactRequest></ContactRequest></PrivateRouter>
            },


            // admin routes
            {
                path: "adminHome",
                element:<AdminRoute><AdminHome></AdminHome></AdminRoute>
            },
            {
                path: "approvedPremium",
                element: <AdminRoute><ApprovedPremium></ApprovedPremium></AdminRoute>
            },
            {
                path: "manage",
                element: <AdminRoute><ManageUser></ManageUser></AdminRoute>
            },
            {
                path: "approvedRequest",
                element: <AdminRoute><ApprovedRequest></ApprovedRequest></AdminRoute>
            },
            {
                path: "showStory",
                element: <AdminRoute><SuccessStory></SuccessStory></AdminRoute>
            },
            {
                path: "showStory/viewStory/:id",
                element: <AdminRoute><ViewStory></ViewStory></AdminRoute>
            }
        ]
    }
  ]);

export default router;