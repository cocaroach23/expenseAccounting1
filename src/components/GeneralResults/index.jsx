import FormForAddNewPurchase from "../FormForAddNewPurchase"
import React from "react"
import { useState } from "react"


const generalResults = () => {

    const initialValue = 0;
    const generalExpenses = oldPurchase.reduce(
        (accumulator , currentValue) => accumulator + currentValue.cash,
        initialValue,
    );
    console.log(generalExpenses);
    

    return (
        <div></div>
    )
}


export default generalResults