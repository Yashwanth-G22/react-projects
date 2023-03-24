import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import '../Componnents/Uncontrolled/UcF.css'

const Login=()=>{

    let navigate=useNavigate()
    let [email,setemail]=useState()
    let [password,setpassword]=useState()

    let handleChange=(e)=>{
        e.preventDefault()
       if(email.length >=6 && password.length >=6){
            if(email.includes('@gmail.com')){
                console.log(e)
                console.log(email,password)
                navigate('/user')
            }else{
                alert('mail must contain @gmail.com')
            }
       }else{
        alert('mail and password must greater than 6 char')
       }
    }

    let changeComponent=()=>{
        navigate('/contact')
    }
    return(
        <>
        <form onSubmit={handleChange}>
            <fieldset>
            <label htmlFor="">Email</label>
            <input type="text"  placeholder="Enter Mail" required onChange={(e)=>setemail(e.target.value)}/>
            <label htmlFor="">Password</label>
            <input type="password" placeholder="Enter Password" required onChange={(e)=>setpassword(e.target.value)}/>
            {/* <input type="submit" id="submit"/> */}
            <button type="submit" >LogIn</button>
            </fieldset>
        </form>

        <button onClick={changeComponent}>Go contact</button>
        {/* form>fieldset>(label+input)*2+button */}
        </>
    )
}
export default Login