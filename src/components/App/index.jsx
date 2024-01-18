import './App.css';
//import LastPurchases from '../LastPurchases';
//import uuid4 from 'uuid4';
//import { useState } from 'react';
//import { compareAsc, format } from "date-fns";
//import { ru } from 'date-fns/locale'
//import barChart from 'components/BarChart';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from 'components/Header';
import OldPurchases from 'components/OldPurchases';
import HomePage from 'components/HomePage';


function App() {
  
 
  
  return (
    <Router>
        <Header />
          <Routes>
            <Route path="/" element={<HomePage />}  />
            <Route path="/OldPurchases" element={<OldPurchases />}  />
          </Routes>
    </Router>
  );
}

export default App;
