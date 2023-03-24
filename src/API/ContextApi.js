import React, {  createContext, useState } from "react";

export let userContext = createContext()

const ContextApi = ({children}) => {

    let [ name , setname ] = useState('Rocky')

    return <div>

        <userContext.Provider value={name}>
                {children}
        </userContext.Provider>

    </div>

}

export default ContextApi