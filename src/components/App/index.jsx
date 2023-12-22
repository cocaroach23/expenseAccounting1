import './App.css';
import LastPurchases from '../LastPurchases';
import uuid4 from 'uuid4';
import { useState } from 'react';


function App() {
  const [oldPurchases, setOldPurchase] = useState([
    {
      id: uuid4(),
      category:'Продукты',
      date:'11/12/2023',
      cash: 300,
    },
    {
      id: uuid4(),
      category:'Одежда',
      date:'05/04/2023',
      cash: 1500,
    },
    {
      id: uuid4(),
      category:'Здоровье',
      date:'27/09/2023',
      cash: 865,
    },
    {
      id: uuid4(),
      category:'Кредит',
      date:'01/01/2023',
      cash: 7000,
    }

  ])

  const addPurchases = (newPurchases) => {
    setOldPurchase([...oldPurchases, newPurchases])
  }

  const deletePurchase = (id) => {
    const filtredPurchases = oldPurchases.filter(purchase => purchase.id !== id)
    setOldPurchase(filtredPurchases)
  }
  
  return (
    <div>
      <LastPurchases key={oldPurchases.id} addPurchases={addPurchases} oldPurchases={oldPurchases} deletePurchase={deletePurchase} />
      
    </div>
  );
}

export default App;
