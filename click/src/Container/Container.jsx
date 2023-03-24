import React from "react";
import { useState } from "react";
import Input from './Input'
import './style.css'

 let Container=()=>{
    let [element,setelement]=useState()

    let getDiv=(e)=>{
        setelement(e)
    }
    return(
        <div className="containerMain">
           <div className="container"> 
            <div onClick={(e)=>getDiv(e)}>Box 1</div>
            <div onClick={(e)=>getDiv(e)}>Box 2</div>
            <div onClick={(e)=>getDiv(e)}>Box 3</div>
            </div>
            <Input data={element}/>
        </div>
    )
}
export default Container