import FormForAddNewPurchase from 'components/FormForAddNewPurchase'
import React from 'react'


const LastPurchases = ({ addPurchases, oldPurchases, deletePurchase }) => {
     

  
    return (
        <div className="max-w-sm ms-10 my-10 gap-y-4 flex">
            <h2 className="font-bold text-xl">Учёт расходов</h2>
            <div>
                {oldPurchases.map((purchase) =>[
                    <div key={purchase.id}>
                        <p>{purchase.category}</p>
                        <p>{purchase.date}</p>
                        <p>{purchase.cash}</p>

                        <a className='hover:underline cursor-pointer' onClick={() => deletePurchase(purchase.id)}>Удалить</a>
                    </div>
                    
                ])}
            </div>
            <FormForAddNewPurchase addPurchases={addPurchases}/>
        </div>
        
    )
}

export default LastPurchases