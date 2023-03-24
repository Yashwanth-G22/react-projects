import React from "react";
import './style.css'
const Display =({value,color})=>{
    return(<h3 style={{backgroundColor:`${color}`}} className='display'>{value}</h3>)
}
export default Display