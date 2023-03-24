import React, { useContext } from "react";

import {userContext} from '../API/ContextApi'

export default function Child2(){

    let a=useContext(userContext)
    console.log(a);
    return (
        <div>
            <h4>{a}</h4>
        </div>
    )
}

