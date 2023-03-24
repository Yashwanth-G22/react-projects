import React from "react";
import { Link ,Outlet } from "react-router-dom";

const Home=()=>{
    return(
        <div>
        <Link to="/tv">
            <img src="https://rukminim1.flixcart.com/image/832/832/xif0q/television/l/d/q/-original-imaggsnkparsege3.jpeg?q=70" alt="" width={300} />
        </Link>
        <Link to="/mobiles">
            <img src="https://rukminim1.flixcart.com/image/832/832/kzd147k0/mobile/x/q/n/-original-imagbe5q4ynz7ge6.jpeg?q=70" alt=""  width={250}/>
        </Link>

        <div>
            <Outlet/>
        </div>
        </div>
    )
}
export default Home