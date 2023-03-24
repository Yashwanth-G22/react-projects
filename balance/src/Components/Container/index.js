import { Component } from "react";
import Table from "../Table";
import Header from "../Header";

class Container extends Component{

    render(){
        return(
            <div>
                <Header text='Balance Enqurie'/>
                <Table/>
            </div>
        )
    }
}

export default Container