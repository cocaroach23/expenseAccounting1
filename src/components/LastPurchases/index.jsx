import FormForAddNewPurchase from 'components/FormForAddNewPurchase'
import React from 'react'



const LastPurchases = ({ addPurchases, oldPurchases, deletePurchase, generalExpenses }) => {
     

  
    return (
      <div className="gap-y-4 flex flex-col m-auto max-w-5xl">
            <h2 className="font-bold text-xl text-center">Учёт расходов</h2>
            <p>Общая сумма: {generalExpenses}</p>
            <div className="bg-gray-100 flex flex-col-reverse">
      
            <div >
                {oldPurchases.map((purchase) =>[
                    <div className="relative px-4 py-16 mx-auto sm:max-w-xl lg:max-w-screen-xl md:px-24 ">
        
                    <div className="flex flex-co relative  ">
                      <div className="flex flex-col w-1/4 justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                        <div className="p-5"  key={purchase.id}>
                          
                          <p className="mb-2 font-bold">{purchase.category}</p>
                          <p className="text-sm leading-5 text-gray-900">
                          {purchase.date}
                          </p>
                          <p className="text-sm leading-5 text-gray-900">
                          {purchase.cash} руб.
                          </p>
                        </div>
                        <button className='px-4 py-2 text-indigo-600 bg-indigo-50 duration-150 hover:bg-indigo-100 active:bg-indigo-200' onClick={() => deletePurchase(purchase.id)}>Удалить</button>
                      </div>
                      
                    </div>
                  </div>
                
                    

                        
                    
                    
                ])}
            </div>
            <FormForAddNewPurchase addPurchases={addPurchases}/>
            </div>
      </div>
        
    )
}

export default LastPurchases