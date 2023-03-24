import React from "react";
import Table from "./Components/Container/Table";

class App extends React.Component{

 constructor(){
  super()
  this.state={
    name:'yash',
    balance:5000.
  }
  
 }
  render(){
    const {name , balance} = this.state
    return(
      <div>
        <Table name={name}
        amount={balance}/>
      </div>
    )
  }
  

}
export default App