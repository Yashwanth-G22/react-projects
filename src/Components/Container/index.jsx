import {Component} from "react";
import'./index.css';

class Container extends Component{
    render(){
        const {text ,value,btnText,click,btnClass,name}= this.props
        return(<div  className={`part ${btnClass}`}>
            <div> 
                <h1>{text}</h1>
                <h2>{value}</h2>
                <div>
                <button onClick={click} className={name}>{btnText}</button>
                </div>

            </div>
        </div>
        )
    }
}

export default Container