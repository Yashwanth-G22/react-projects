import React from "react";

function Navbar({han}){
   console.log(han);
   
   return <div>{
    han.map(data=>{
        console.log(data);
        return <ul>
            <li>{data}</li>
        </ul>    
    })
    }
   </div>

}

export default Navbar;