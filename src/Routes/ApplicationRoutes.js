import React from "react";
import {useRoutes} from 'react-router-dom'
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Mobiles from "../Pages/Mobiles";
import SignUp from "../Pages/SignUp";
import Tv from "../Pages/Tv";
import User from "../Pages/User";


const ApplicationRoutes = () => {

    let Routes = useRoutes([
        {
            path:'/',
            element:<Home/>,
            children:[
                {
                    path:'tv',
                    element:<Tv/>
                },
                {
                    path:'mobiles',
                    element:<Mobiles/>
                }
            ]
        },
        {
            path:'contact',
            element:<Contact/>
        },
        {
            path:'about',
            element:<About/>
        },
        {
            path:'signup',
            element:<SignUp/>
        },
        {
            path:'login',
            element:<Login/>
        },
        {
            path:'user/:id',
            element:<User/>
        }
    ])
    return Routes
}
export default ApplicationRoutes