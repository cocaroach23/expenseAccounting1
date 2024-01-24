import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from 'components/Header';
import OldPurchases from 'components/OldPurchases';
import HomePage from 'components/HomePage';


function App() {
  
 
  
  return (
    <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<HomePage />}  />
            <Route path="/OldPurchases" element={<OldPurchases />}  />
          </Routes>
    </BrowserRouter>
  );
}

export default App;
