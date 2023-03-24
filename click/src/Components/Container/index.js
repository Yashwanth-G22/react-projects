import { Component } from "react";
import './style.css'
import '../Input/style.css'
import Box from "../Box";
import Input from "../Input";
import Button from "../Button";

class Container extends Component{
    constructor(props){
        super(props)
        this.state={
            box:['red','black','white','blue'],
            color:'',
            element:''
        }
    }
     changeBox=(event)=>{
        console.log(event.target)
        this.setState({element:event.target})

     }
     handleChange=(color)=>{
        this.setState({color:color})            

     }
     colorChange=()=>{
        let newColor=this.state.color
        this.state.element.style.backgroundColor=newColor
     }
    render(){
        return( <div className="containermain">
                <div className="container" >
               {this.state.box.map((box,index)=>{
                return(<Box text={`Box ${index}`} 
                click={event=>{this.changeBox(event)}} 
                color={box}/>) })
               }
               </div>
               <div className="row">
                    <Input click={this.handleChange}/>
                    <Button text='Apply' 
                    colorChange={this.colorChange}
                    type='submit'/>
               </div>
            </div>
        )
    }

}

export default Container