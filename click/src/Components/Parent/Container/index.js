import React, { useState } from "react";
import Callback from "../Callback";
import './style.css'

export default function Container(){
    const [color , setcolor]=useState(null)

  let getColor=(color)=>{
        setcolor(color)
    }
    return(
        <div className="container">
            <div className="container-color" style={{backgroundColor:`${color}`}}></div>
            <Callback getColor={getColor}/>
         </div>)
}