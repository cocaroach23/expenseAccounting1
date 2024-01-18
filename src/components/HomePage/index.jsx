import { useState } from 'react';
import React from "react"

const HomePage = ( { generalExpenses } ) =>{

    return (
        <div>
        <div className="my-24 text-lg text-center">Начальная страница</div>
        <p>Общая сумма: {generalExpenses}</p>
        </div>
    )
}

export default HomePage