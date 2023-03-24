import React from "react";

let Data=(props)=>{
   
    return(
        <div>
            <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {
           props.d.map(d => {
              return (<tr key={d.id} onClick={(d) => this.handledata(d)} >
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>{d.address.zipcode}</td>
              </tr>)
            })
          }
        </tbody>
      </table>
    </div>
        </div>
    )
}
export default Data