import React from "react";
import '../Uncontrolled/UcF.css'

class ControlledClass extends React.Component{
constructor(props){
    super(props)
    this.state={
        name:'',
        email:'',
        password:'',
        confrompassword:''
    }
    this.handleData=this.handleData.bind(this)
    // this.handleChange=this.handleChange.bind(this)
}
handleData=(e)=>{
    e.preventDefault();
    console.log(e);
    let name=e.target[1].value
    let email=e.target[2].value
    let password=e.target[3].value
    let confrompassword=e.target[4].value    
   if(password === confrompassword){
    console.log(this.state)
    console.log(name,email,password)
   }    
   else{
    alert('Ur password could match')
   }
}

// handleChange=(e)=>{
    
//     let {name,value}=e.target
//     this.setState({[name]:value})
//     }
    // render(){
    //     return(
    //         <section> 
    //         <form className="form">
    //        <fieldset>
    //        <label htmlFor="">Name</label>
    //         <input type="text" name="name"  value={this.state.name} placeholder="Enter Ur Name" onChange={(e)=>this.handleChange(e)} />
    //         <label htmlFor="">Email</label>
    //         <input type="text" name="email"  value={this.state.email}  placeholder="Enter Gmail" onChange={(e)=>this.setState({email:e.target.value})} />
    //         <label htmlFor="">Password</label>
    //         <input type="password" name="password"  value={this.state.password} placeholder="Enter Password" onChange={(e)=>this.setState({password:e.target.value})} />
    //         <label htmlFor="">Conform Password</label>
    //         <input type="password" name="confrompassword" value={this.state.confrompassword} placeholder="Re Enter Same Password" onChange={(e)=>this.setState({confrompassword:e.target.value})}/>
    //         <button type="submit"  onClick={this.handleData}>Submit</button>
    //        </fieldset>
    //     </form>
    //     </section>
    //     )
    // }

    render(){
        return(
            <section> 
            <form className="form" onSubmit={this.handleData}>
           <fieldset>
           <label htmlFor="">Name</label>
            <input type="text"  placeholder="Enter Ur Name"  />
            <label htmlFor="">Email</label>
            <input type="text"  placeholder="Enter Gmail"  />
            <label htmlFor="">Password</label>
            <input type="password"  placeholder="Enter Password"  />
            <label htmlFor="">Conform Password</label>
            <input type="password"  placeholder="Re Enter Same Password" />
            <button type="submit" >Submit</button>
           </fieldset>
        </form>
        </section>
        )
    }
}
export default ControlledClass