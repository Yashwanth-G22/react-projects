import {Component} from "react";
import './style.css';

class TableRow extends Component{

    render(){
        const {name , balance} = this.props
        return( <tr>
                    <td>{name}</td>
                    <td>{balance}</td>
                </tr>
            
        )
    }
}

export default TableRow