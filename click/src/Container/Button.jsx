import React from "react";

const Button=({data})=>{

let changeColor=()=>{
    let div=data.data.target
    div.style.backgroundColor=data.color.current.value
    data.color.current.value=''    
}
    return(<div>
        <button onClick={changeColor}>changeColor</button>
    </div>)
}
export default Button