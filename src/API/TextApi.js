import React, { createContext , useState} from "react";

export let text = createContext()

const TextApi = ({children}) => {

    let [ name , setname ] = useState('Yashwanth')

    return(
        <div>
            <text.Provider value={name}>
                {children}
            </text.Provider>
        </div>
    )

    
}

export default TextApi