import { useState } from "react"
import Button from "../Button"
import React from 'react'
import ReactSelect from "react-select"

const Forms = ({addForm}) => {
    

    const [cash, setCash] = useState('')
    const [date, setDate] = useState('')
    const [selectedOptions, setSelectedOptions] = useState('')
    const category = [
        {value:"productForm", label:'Продукты'},
        {value:"cloth", label:'Одежда'},
        {value:"health", label:'Здоровье'},
        {value:"leisure", label:'Развлечения'},
        {value:"credit", label:'Кредит'}
    ]
    const handleChange = selectedPtions => {
        selectedOptions(selectedOptions)
    }

    const handleClick = event => {  
        event.preventDefault() 
        const form = {
            category,
            date,
            cash
        }

        addForm(form)
    }

    return (
        <div className="max-w-sm ms-10 my-10 gap-y-4 flex">
            <h2 className="font-bold text-xl">Учёт расходов</h2>
            <form>
                <div>
                    <label for="category" className="col-span-1"></label>
                    <ReactSelect key={category} value={selectedOptions} onChange={handleChange} options={category} />
                    

                </div>
                <div>
                    <label for="date">Дата покупки</label>
                    <input 
                        onChange={(event) => setDate(event.target.value)}
                        type="date" 
                        id="date" 
                        name="date" />
                </div>

                <div>
                    <label for="cash" className="col-span-1">Сумма</label>
                    <input name="cash" 
                    onChange={(event) => {setCash(event.target.value)}}
                    

                        value={cash} 
                        type="number"
                        className="col-span-2 border border-solid border-black-400 rounded"
                    />
                </div>

                <Button title="Добавить" handleClick={handleClick} type="submit" />
            </form>
           { /*<div>
                {Forms.map((form) =>{
                    return(<div>
                        <p>{form.category}</p>
                        <p>{form.date}</p>
                        <p>{form.cash}</p>
                        
                    </div>)
                })}
            </div>*/}
        </div>
        
    )
}

export default Forms