import React, { useRef, useState, useSyncExternalStore } from 'react'
import Button from './Components/Button'
import Input from './Components/Input'

function App() {

  let textRef=useRef()
  let [final,setfinal]=useState([])
  let [text,settext]=useState(()=>{
    let savedtodo=JSON.parse(localStorage.getItem("Text"))
    if(savedtodo !== "" && savedtodo !== null){
      return savedtodo;
    }else{
      return [];
    }
  })

  let handleData = () => {
    

  }
  const todoText = (e) => {
    e.preventDefault()
    let data=textRef.current.value
    settext([...text,data])
    
    setfinal(localStorage.setItem("Text",JSON.stringify(text)))
  }
  return (
    <div onChange={todoText}>
      <Input Ref={textRef} placeholder='Enter Data' fun={todoText}/>
      
    </div>
  )
}

export default App
