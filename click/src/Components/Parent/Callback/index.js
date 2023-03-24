import React, { useState } from "react";

export default function Callback({getColor}){
    const [active,setactive]=useState()

    let handleChange=(e)=>{
        const {value}=e.target
        setactive(value)
         getColor(value)
    }

    return(
        <input 
        aria-label="input"
        onChange={handleChange}
        value={active}/>
    )
}