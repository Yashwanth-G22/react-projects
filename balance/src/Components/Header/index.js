import {Component} from "react";
import '../Header/style.css'

class Header extends Component{
    render(){
        const {text}=this.props
        return(
            <div className="header">
                <h1>{text}</h1>
            </div>
        )
    }
}

export default Header