import React,{memo} from 'react'

function Child1(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <button onClick={props.data}>ChangeName</button>
      {console.log("yash")}
    </div>
  )
}

export default memo(Child1)
