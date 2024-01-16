import { useState } from "react"
import Button from "../Button"
import React from "react"
import Error from "../Error" 
import ReactSelect from "react-select"

const FormForAddNewPurchase = ({addPurchases}) => {
    const categories = [
        {value:"Продукты", label:'Продукты'},
        {value:"Одежда", label:'Одежда'},
        {value:"Здоровье", label:'Здоровье'},
        {value:"Развлечения", label:'Развлечения'},
        {value:"Кредит", label:'Кредит'} 
    ]

    const[selectedCategory, setSelectedCategory] = useState(null)
    const [cash, setCash] = useState('')
    const [date, setDate] = useState('')
    const [error, setError] = useState(false)
    
    
    const handleChange = (selectedOptions) => {
        setSelectedCategory(selectedOptions)
    }

    const handleClick = (event) => {  
        event.preventDefault()
        
        if(!selectedCategory || !cash || !date){

            setError(true)
        } else {
            const newPurchase = {
                category: selectedCategory.value,
                date: date,
                cash: cash
            }

            addPurchases(newPurchase)
            setSelectedCategory('')
            setCash('')
            setDate('')
            setError(false)
        }
               
    }

    return (
        <div className="m-auto flex justify-between">
            
            <form className="flex pt-6">
                <div className="flex gap-12 justify-between">
                    <div>
                        <label for="category" className="col-span-1"></label>
                        <ReactSelect value={selectedCategory} onChange={handleChange} options={categories} />
                        

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
                        onChange={(event) => setCash(event.target.value)}
                            value={cash} 
                            type="text"
                            className="col-span-2 border border-solid border-black-400 rounded"
                        />
                    </div>
                </div>
                <Button title="Добавить" handleClick={handleClick} type="button" />
            </form>
           {error && <Error />}
        </div>
        
    )
}


export default FormForAddNewPurchase