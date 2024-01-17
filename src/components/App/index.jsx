import './App.css';
import LastPurchases from '../LastPurchases';
import uuid4 from 'uuid4';
import { useState } from 'react';
import { compareAsc, format } from "date-fns";
import { ru } from 'date-fns/locale'
import barChart from 'components/BarChart';


function App() {
  
  const [oldPurchases, setOldPurchase] = useState([
    {
      id: uuid4(),
      category:'Продукты',
      date:format(new Date(2017, 10, 6), 'd MMMM yyyy', {locale: ru}),
      cash: 300,
    },
    {
      id: uuid4(),
      category:'Одежда',
      date:format(new Date(2023, 6, 5), 'd MMMM yyyy', {locale: ru}),
      cash: 1500,
    },
    {
      id: uuid4(),
      category:'Здоровье',
      date:format(new Date(2023 , 9, 27), 'd MMMM yyyy', {locale: ru}),
      cash: 865,
    },
    {
      id: uuid4(),
      category:'Кредит',
      date:format(new Date(2023, 1, 1), 'd MMMM yyyy', {locale: ru}),
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

  const generalExpenses = oldPurchases.reduce((acc , newPurchase) =>
    acc + parseFloat(newPurchase.cash), 0);
  
  return (
    <div>
      <p>Общая сумма: {generalExpenses}</p>
      <LastPurchases key={oldPurchases.id} addPurchases={addPurchases} oldPurchases={oldPurchases} deletePurchase={deletePurchase} />
      <barChart />
    </div>
  );
}

export default App;
