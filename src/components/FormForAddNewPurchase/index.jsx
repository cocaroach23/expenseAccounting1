import { useState } from "react"
import Button from "../Button"
import React from "react"
import Error from "../Error" 

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
    const [selectedOptions, setSelectedOptions] = useState(null)
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
        <div className="max-w-sm ms-10 my-10 gap-y-4 flex">
            <h2 className="font-bold text-xl">Учёт расходов</h2>
            <form>
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
                        type="number"
                        className="col-span-2 border border-solid border-black-400 rounded"
                    />
                </div>

                <Button title="Добавить" handleClick={handleClick} type="button" />
            </form>
           {error && <Error />}
        </div>
        
    )
}


export default FormForAddNewPurchase