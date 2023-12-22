import FormForAddNewPurchase from 'components/FormForAddNewPurchase'
import React from 'react'


const LastPurchases = ({ addPurchases, oldPurchases, deletePurchase }) => {
     

  
    return (
        <div className="max-w-sm ms-10 my-10 gap-y-4 flex">
            <h2 className="font-bold text-xl">Учёт расходов</h2>
            <div className="bg-gray-100">
      
            <div>
                {oldPurchases.map((purchase) =>[
                    <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        
                    <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                      <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
                        <div className="p-5"  key={purchase.id}>
                          
                          <p className="mb-2 font-bold">{purchase.category}</p>
                          <p className="text-sm leading-5 text-gray-900">
                          {purchase.date}
                          </p>
                          <p className="text-sm leading-5 text-gray-900">
                          {purchase.cash} руб.
                          </p>
                        </div>
                        <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                      </div>
                      <button className='px-4 py-2 text-indigo-600 bg-indigo-50 rounded-lg duration-150 hover:bg-indigo-100 active:bg-indigo-200' onClick={() => deletePurchase(purchase.id)}>Удалить</button>
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