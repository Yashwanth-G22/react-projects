import React from 'react'
import { useMemo } from 'react'
import { useCallback } from 'react'
import { useState } from 'react'


function Parent() {

  let [count , setcount] = useState(0)
  let [name , setname] = useState('yash')
  let calculaterValue=useMemo(()=>{return calculater(count)},[count])

  let increment=()=>{
    setcount(count + 1)
  }
  let decremet=()=>{
    setcount(count-1)
  }
  let changeName=useCallback(()=>{
    setname("king")
  },[name])
   
  function calculater(counter){
    console.log("Calculater function is running")
    return counter + 1;
  }
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increment}>Incrememt</button>
      <button onClick={decremet}>Decrement</button>
      <h2>{name}</h2>
      <h2>{calculaterValue}</h2>
      <button onClick={changeName}>ChangeName</button>
    </div>
  )
}

export default Parent
