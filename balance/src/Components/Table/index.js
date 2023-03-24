import { Component } from "react";
import TableRow from "../TableRow";
import '../Table/style.css';
import Button from "../Button";
import TableInput from "../TableInput";


class Table extends Component{

    constructor(){
        super()
        this.state={
            persons:[
                {
                    name:'Yash',
                    balance:2800
                },
                {
                    name:'King',
                    balance:4000
                }
            ],
            showInput:false
        }
        this.btnChange=this.btnChange.bind(this)
    }

    btnChange=()=>{
        this.setState({
            showInput:! this.state.showInput
        })
        
    }

    render(){
        return( <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Balance</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.persons.map((person,index)=>{
                                return <TableRow key={index} name={person.name} balance={person.balance}/>
                            })
                        }
                        {
                            <Button text={this.state.showInput}
                                click={this.btnChange}/>
                        }
                        {
                            this.state.showInput ? <TableInput/>:''
                        }
                        <TableRow name='Total' balance={this.state.persons.reduce((initi,elem)=>initi+elem.balance,0)}/>
                    </tbody>
                </table>
        )
    }
}

export default Table
