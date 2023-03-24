import React,{useRef} from "react";
import Button from "./Button";
import './style.css'

const Input=({data})=>{
    let colorRef=useRef()
    let color=colorRef
    return(<div className="footer">
        <input type="text" ref={colorRef}/>
        <Button data={{data,color}}/>
    </div>)
}
export default Input