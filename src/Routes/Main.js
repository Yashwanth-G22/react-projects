import React from "react";
import {BrowserRouter} from "react-router-dom"
import Navbar from "../Navbar/Navbar";

import ApplicationRoutes from "./ApplicationRoutes";
// import Home from "./Pages/Home";
// import About from "./Pages/About"
// import Contact from "./Pages/Contact";
// import SignUp from "./Pages/SignUp";
// import Login from "./Pages/Login";
// import PageNotFound from "./Pages/PageNotFound";
// import Tv from "./Pages/Tv"
// import Mobiles from "./Pages/Mobiles";

const Main  = ()=>{
  return(
    <BrowserRouter>
     <Navbar/>
      <ApplicationRoutes/>
     {/* <Routes>
      <Route path="/" element={<Home/>}>
      <Route path="tv" element={<Tv/>}></Route>
      <Route path="mobiles" element={<Mobiles/>}></Route>
      </Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/signup" element={<SignUp/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="*" element={<PageNotFound/>}></Route>
     </Routes> */}
     </BrowserRouter>
    
  )
}
export default Main