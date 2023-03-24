import React from "react";
import './index.css'
 class Header extends React.Component{
    render(){
        const {value,text}=this.props
       return( <div className="container">
           <h1>{text}</h1>
        </div>)
    }
}
export default Header
