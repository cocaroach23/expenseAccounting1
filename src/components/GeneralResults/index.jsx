import FormForAddNewPurchase from "../FormForAddNewPurchase"
import React from "react"
import { useState } from "react"


const generalResults = ({oldPurchases}) => {

    
    const generalExpenses = newPurchase.reduce((acc , oldPurchase, i , arr) => {
        console.log(acc);
        return acc + oldPurchase.cash;
}, 0);
    console.log(generalExpenses);
    

    return (
        <div></div>
    )
}


export default generalResults