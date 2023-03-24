// import React from "react";
// import Parent from "./Componnents/Parent";
// import Callback from "./HoComponent/Callback";
// // import Main from "./Routes/Main";
// // import Todo from "./Todo/index"

// const App = () => {

//   return (
//     <div>
//      {/* <Main/>


//       <Todo/> */}

//       <Parent/>
//     </div>
//   )
// }
// export default App




// import './index.css'
// import React, { useEffect, useState } from 'react'

// function App() {
//   // let [data,setdata]=useState()

//   // useEffect(()=>{
//   //   let URL=`https://api.openweathermap.org/data/2.5/weather?q=tirupati&appid=c0d30e86b1ca3c7c5af702d91bd57bc7`
//   //   fetch(URL).then((a)=>{return a.json()}).then((b)=>setdata(b))
       
//   // },[])
//   // const deleteRow=(id)=>{ 
//   //     data.filter(a=>{
//   //       if(a.id !== id ){
         
//   //         console.log(a)
//   //       }
        
//   //     })
  
//   // }
//   // return (<div>
//   //   {/* <table>
//   //   <thead>
//   //     <tr>
//   //       <th>name</th>
//   //       <th>Username</th>
//   //     </tr>
//   //   </thead>
//   //   <tbody>
//   //   { 
//   //    data === undefined ? <>Loading..</>
//   //    :data.map(d=>{
//   //     return <tr key={d.id} onClick={()=>deleteRow(d.id)}>
//   //       <td>{d.name}</td>
//   //       <td>{d.username}</td>
//   //     </tr>
//   //   })
//   //   }
//   //   </tbody>
//   //   </table> */}

//   //   <h2></h2>
    
//     </div>
//   )
// }

// export default App


import React from 'react'
import Wheather from './Wheather'

function App() {
  return (
    <div>
      <Wheather/>
    </div>
  )
}

export default App
