import React ,{ useState } from "react";
import { useEffect } from "react";
import { createRef } from "react";
import './index.css'

const Todo = () => {
    let todoRef=createRef()
    let [finalTodo , setfinalTodo]= useState(()=>{
        let savedtodo=JSON.parse(localStorage.getItem("data"))
        if(savedtodo !=="" && savedtodo !==null){
           return savedtodo;
        }else {
            return [];
        }
    })
    

    useEffect(()=>{
        localStorage.setItem("data",JSON.stringify(finalTodo));
    },[finalTodo])

    const todoText=(e)=>{
        e.preventDefault()
        let todo=todoRef.current.value
        todoRef.current.value=""
        setfinalTodo([...finalTodo,todo])
       
       
    }

    return(<div className="container">
        <form onSubmit={todoText}>
            <fieldset>
                <input type="text" placeholder="Enter Todo" ref={todoRef} required/>
                <button type="submit">Add Todo</button>
            </fieldset>
        </form>
        <div>
            {
             finalTodo !== null ? finalTodo.map((a,index)=>{
                return <ul key={index}>
                    <li>{a}</li>
                </ul>
               }):[]
            }

            
        </div>
    </div>)
}
export default Todo