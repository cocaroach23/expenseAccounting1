import FormForAddNewPurchase from "../FormForAddNewPurchase"
import React from "react"
import { useState } from "react"


const generalResults = ({newPurchase}) => {

    
    const generalExpenses = newPurchase.reduce((acc , newPurchase, i , arr) => {
        console.log(acc);
        return acc + newPurchase.cash;
}, 0);
    console.log(generalExpenses); // не очень понимаю какой массив нужно брать старый или новый
    

    return (
        <div></div>
    )
}


export default generalResults