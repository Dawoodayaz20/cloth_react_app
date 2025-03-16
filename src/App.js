import React from 'react';
import './App.css';
import HomePage from './pages/homePage/homepage.component';
import { Routes, Route } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';

function App() {
  return( 
    <div>
      <Routes> {/* Wrap Route elements inside <Routes> */}
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;
