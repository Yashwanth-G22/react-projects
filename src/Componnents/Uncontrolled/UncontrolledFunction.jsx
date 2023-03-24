import React,{ useRef } from "react";
import './UcF.css'

const UncontrolledFunction = () =>{
    let nameRef=useRef();
    let emailRef=useRef();
    let passwordRef=useRef();
    let confrompasswordRef=useRef();
    let genderRef=useRef();
    let checkboxRef=useRef();
    
    let handleData=(e)=>{
        e.preventDefault();
        let name = nameRef.current.value
        let email = emailRef.current.value
        let gender = genderRef.current.value
        let password = passwordRef.current.value
        let confrompassword = confrompasswordRef.current.value
        let checkbox=checkboxRef.current.value
         console.log(name)
        if(password === confrompassword){
            console.log(name,email,password,gender,checkbox);
        }
    }
   

    return(
            <section>
                <form className="form" onSubmit={handleData}>
               <fieldset>
               <label htmlFor="">Name</label>
                <input type="text" name="name" id="" placeholder="Enter Ur Name" ref={nameRef} />
                {/* <label htmlFor="">Balance</label>
                <input type="text" name="" id="" placeholder="Balance" /> */}
                <label htmlFor="">Email</label>
                <input type="text" name="" id="" placeholder="Enter Gmail" ref={emailRef}/>
                <div>
                <div><label htmlFor="">Gender</label></div>
                <div className="gnder" ref={genderRef}>
                    <input type="radio" name="abc" id=""/>Male
                    <input type="radio" name="abc" />Female
                </div>
                </div>
                <label htmlFor="">Password</label>
                <input type="password" name="" id=""  placeholder="Enter Password" ref={passwordRef}/>
                <label htmlFor="">Conform Password</label>
                <input type="password" placeholder="Re Enter Same Password" ref={confrompasswordRef}/>

                <div className="checkbox"><input type="checkbox" /><span>About All Details Correct</span></div>
                <button type="submit">Submit</button>
               </fieldset>
            </form>
            </section>
       
    )
}
export default UncontrolledFunction