import { Component } from "react";
import './style.css'

class Box extends Component{

    render(){
        const {text , click,color}=this.props
        return(<div>
                    <div className="box" onClick={click} style={{backgroundColor:color}} >
                            <h2>{text}</h2>
                    </div>
            </div>
        )
    }
}

export default Box