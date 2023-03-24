import React, { createRef } from "react";
import './UcF.css'

class UncontrolledClass extends React.Component{

    constructor(){
        super()
        this.nameRef=createRef();
        this.emailRef=createRef();
        this.passwordRef=createRef();
        this.confrompasswordRef=createRef();
        this.handleData=this.handleData.bind(this)
    }
    handleData=(e)=>{
        e.preventDefault();
        let name=this.nameRef.current.value
        let email=this.emailRef.current.value
        let password=this.passwordRef.current.value
        let confrompassword=this.confrompasswordRef.current.value

        if(password === confrompassword){
            // console.log(name,email,password)
            if(email.includes('@gmail.com')){
                console.log(name,email,password)
            }else{
                alert('valid mail have To give')
            }
        }

    }

    render(){
        return(
            <section>
            <form className="form" onSubmit={this.handleData}>
           <fieldset>
           <label htmlFor="">Name</label>
            <input type="text" name="name" id="" placeholder="Enter Ur Name" ref={this.nameRef}/>
            <label htmlFor="">Email</label>
            <input type="text" name="" id="" placeholder="Enter Gmail" ref={this.emailRef}/>
            {/* <div>
            <div><label htmlFor="">Gender</label></div>
            <div className="gnder" >
                <input type="radio" name="abc" id=""/>Male
                <input type="radio" name="abc" />Female
            </div>
            </div> */}
            <label htmlFor="">Password</label>
            <input type="password" name="" id=""  placeholder="Enter Password" ref={this.passwordRef}/>
            <label htmlFor="">Conform Password</label>
            <input type="password" placeholder="Re Enter Same Password" ref={this.confrompasswordRef}/>

            {/* <div className="checkbox"><input type="checkbox" /><span>About All Details Correct</span></div> */}
            <button type="submit">Submit</button>
           </fieldset>
        </form>
        </section>
        )
    }
}
export default UncontrolledClass