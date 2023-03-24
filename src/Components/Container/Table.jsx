import React from "react";
import './index.css'

class Table extends React.Component{
    render(){
        const {name , amount} = this.props
        return(
            <div className="table">
                <table>
                    <thead>
                        <th>Name</th>
                        <th>Balance</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{name}</td>
                            <td>{amount}</td>
                        </tr>
                        <button>+</button>
                    </tbody>
                    <tr>
                        {`Total :${amount}`}
                    </tr>
                </table>
            </div>
        )
    }
}
export default Table