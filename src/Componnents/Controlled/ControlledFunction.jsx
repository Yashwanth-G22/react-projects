import React from "react";
import { useState } from "react";
import '../Uncontrolled/UcF.css'

const ControlledFuction=()=>{

    let [name,setname]=useState()
    let [email,setemail]=useState()
    let [password,setpassword]=useState()

    const handleChange=(e)=>{
        e.preventDefault()
        if(name !== undefined && email !== undefined && password !== undefined){
        console.log(name,email,password)
    }

    }
    return(<>
                     <fieldset>
                    <label>Sign Up</label>
                    </fieldset>
                <form className="container" onClick={handleChange}>
                    
                    <label htmlFor="">UserName</label>
                    <input type="text" placeholder="Enter Name" onChange={(e)=>setname(e.target.value)}/>
                    <label htmlFor="">Email</label>
                    <input type="text" placeholder="Enter Email" onChange={(e)=>setemail(e.target.value)}/>
                    <label htmlFor="">Password</label>
                    <input type="password" placeholder="Enter Password" onChange={(e)=>setpassword(e.target.value)}/>
                    <button type="submit">Submit</button>
                    
                </form>
        </>
    )
}
export default ControlledFuction





// import React, { useState } from "react";
// import '../Uncontrolled/UcF.css'

// const ControlledFuction = () =>{
//     let [ name , setname ]=useState()
//     let [ email , setemail ]=useState()
//     let [ password , setpasword ] = useState()
//     let [confrompassword , setconfrompassword ]=useState()

//     let handleData=(e)=>{
//         e.preventDefault()
//         if(password === confrompassword){
//             console.log(name,email,password)
//         }
//     }

//     return(
//         <section>
//             <form className="form" onClick={handleData}>
//            <fieldset>
//            <label htmlFor="">Name</label>
//             <input type="text" name="name" id="" placeholder="Enter Ur Name" onChange={(e)=>setname(e.target.value)} />
//             <label htmlFor="">Email</label>
//             <input type="text" name="" id="" placeholder="Enter Gmail" onChange={(e)=>setemail(e.target.value)} />
//             <label htmlFor="">Password</label>
//             <input type="password" name="" id=""  placeholder="Enter Password" onChange={(e)=>setpasword(e.target.value)} />
//             <label htmlFor="">Conform Password</label>
//             <input type="password" placeholder="Re Enter Same Password" onChange={(e)=>setconfrompassword(e.target.value)}/>
//             <button type="submit">Submit</button>
//            </fieldset>
//         </form>
//         </section>
//     )
// }
// export default ControlledFuction