import { createContext, useContext } from "react";

export const TodoContext=createContext({
    todos:[{
        id:1,
        todo:"lets start",
        complete:false
    }],
    addtodo:(todo)=>{},
    updatetodo:(id,todo)=>{},
    deletetodo:(id)=>{},
    togglecomplete:(id)=>{}
});

export const TodoContextProvider=TodoContext.Provider;

export const useTodo=()=>{
    return useContext(TodoContext);
}