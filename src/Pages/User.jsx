import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const User = () =>{
    let {id,name}=useParams()
    let [user , setuser] = useState([])
   
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users:$(id)`).then(a=>{return a.json()})
        .then(b=>setuser(b))
    },[]) 

    return(<div>
    {/* <h1>The User Id is  {id} </h1> */}
       <div>
        {
                (user === undefined) ?(<h1>Loading...</h1>):(<h4>{user.name}</h4>)
        }
        
       </div>
        </div>)
}
export default User