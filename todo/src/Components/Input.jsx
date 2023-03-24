import React from 'react'

function Input(props) {
  return (
    <div>
      <input type="text"  ref={props.Ref} placeholder={props.placeholder}/>
      <button onSubmit={props.fun}>click</button>
    </div>
  )
}

export default Input
