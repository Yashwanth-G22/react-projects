import { Component } from "react";
import './style.css'

class Button extends Component{

    render(){
        const {text,type,colorChange}=this.props
        return(<button type={type} onClick={colorChange}>{text}</button>)
    }
}
export default Button