import React from 'react';
import './App.css';
import HomePage from './pages/homepage.component';
import { Routes, Route } from 'react-router-dom';

const HatsPage = () => (
  <div> 
    <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return( 
    <div>
      <Routes> {/* Wrap Route elements inside <Routes> */}
        <Route path='/' element={<HomePage />} />
        <Route path='/hats' element={<HatsPage />} />
      </Routes>
    </div>
  );
}

export default App;
