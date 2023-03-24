import React, { useContext } from "react";
import {text} from '../API/TextApi'

const ChildComponent = () => {

    let data = useContext(text)
    console.log(data);
    return (
        <div>
            <h1>{data}</h1>
        </div>
    )
}

export default ChildComponent