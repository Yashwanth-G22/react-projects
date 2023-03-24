import React from "react";
import "./../index.css"

export default class Image extends React.Component{

    constructor(){
        super()
        this.state={
            image:[]
        }
    }
    componentDidMount(){
        let url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrTghFiR7ULhe8YVv_8NY6UpkhCIk5Q5l_hg&usqp=CAU"
        fetch(url).then(data=>{return data.json}).then((a)=>{this.setState({image:a})}).catch(err=>console.log(err))
    }

    render(){
        return(
            <div>
                
                 <div><img src={this.state.image} alt="Yashwanth" /></div>
            </div>
        )
    }
}