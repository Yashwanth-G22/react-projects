import { Component } from "react";


class TableInput extends Component{

    render(){
        return(<tr>
                    <td><input placeholder="Enter Name" /></td>
                    <td><input placeholder="Enter Balance"/></td>
                </tr>
        )
    }
}

export default TableInput