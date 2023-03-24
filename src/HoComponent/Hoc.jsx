import React from 'react'
import { useState } from 'react'

function Hoc(AcceptComponet) {
    function PassCallback(){
       let [name,setname]=useState("yash")
        return <AcceptComponet data={name}/>
    }
  return PassCallback
}

export default Hoc
