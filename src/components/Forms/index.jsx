import { useState } from "react"
import Button from "../Button"
import React from 'react'
import Select from 'react-select'

const Forms = () => {

    const [cash, setCash] = useState('')
    const [options, setOptions] = useState('')
    const options = [
        {value:"productForm", label:'Продукты'},
        {value:"cloth", label:'Одежда'},
        {value:"health", label:'Здоровье'},
        {value:"leisure", label:'Развлечения'},
        {value:"credit", label:'Кредит'}
    ]
    const MyComponent = () =>(
        <Select options={options} />//не уверен в этой функции
    )

    return (
        <div className="max-w-sm ms-10 my-10 gap-y-4 flex">
            <h2 className="font-bold text-xl">Учёт расходов</h2>
            <form>
                <div>
                    <label for="category" className="col-span-1"></label>
                    <input onChange={(event, target, value) =>{
                        setOptions(event, target, value)
                    }}/>
                    {/*<select name="category" id="category">
                        <option value="productForm">Продукты</option>
                        <option value="cloth">Одежда</option>
                        <option value="health">Здоровье</option>
                        <option value="leisure">Развлечения</option>
                        <option value="credit">Кредит</option>
                    </select>*/}
                    

                </div>
                <div>
                    <label for="date">Дата покупки</label>
                    <input type="date" id="date" name="date" />
                </div>

                <div>
                    <label className="col-span-1">Сумма</label>
                    <input onChange={(event, target, value) => {
                        setCach(event, target, value)
                    }}

                        value={cash} name="cash"
                        type="number"
                        className="col-span-2 border border-solid border-black-400 rounded"
                    />
                </div>

                <Button title="Добавить" handleClick={handleClick} />
            </form>
        </div>
    )
}

export default Forms