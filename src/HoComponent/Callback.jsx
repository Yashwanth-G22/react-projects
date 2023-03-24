import React from 'react'
import Hoc from './Hoc'

function Callback(props) {
  return (
    <>CallBack Function Component<br/>
    <h3>{props.data}</h3>
    </>
  )
}

export default Hoc(Callback)
