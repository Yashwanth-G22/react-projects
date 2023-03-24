import {Component} from "react";
import '../Button/style.css'

class Button extends Component{

    render(){
        const {text,click}=this.props
        return(<tr>
            <button onClick={click}>{ 
            text ?<i className="fa-solid fa-check"></i>:<i className="fa-solid fa-plus"></i>}</button>
        </tr>)
    }
}

export default Button