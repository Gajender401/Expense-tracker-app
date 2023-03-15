import React,{createContext, useReducer} from "react";
import reducer from "./reducer";

const initalState = JSON.parse(localStorage.getItem("transactions")) || []

export const ExpenseTrackerContext = createContext(initalState)

export const Provider = ({ children }) =>{
    const [transactions, dispatch] = useReducer(reducer, initalState)

    const deleteTransaction = (id) => dispatch({type:"DELETE_TRANSACTION",payload:id})
    const addTransaction = (trans) => dispatch({type:"ADD_TRANSACTION",payload:trans})

    const balance = transactions.reduce((acc,currVal)=> currVal.type==="Income" ? acc + currVal.amount : acc - currVal.amount,0)


    return (
        <ExpenseTrackerContext.Provider value={{deleteTransaction,addTransaction,transactions,balance}} >
            {children}
        </ExpenseTrackerContext.Provider>
    )
}