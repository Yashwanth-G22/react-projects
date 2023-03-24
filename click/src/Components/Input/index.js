import { Component, createRef } from "react";
import './style.css'


class Input extends Component{
     
    constructor(){
        super()
        this.colorRef=createRef()
    }
    handlechange=(click)=>{
       
       let color=this.colorRef.current.value
        click(color)
    }
    render(){
        
        return(<input type='text' placeholder="Name of Color" ref={this.colorRef} onChange={this.handlechange}/>)
    }
}
export default Input