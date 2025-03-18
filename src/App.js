import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header  from './components/header/header.component';
import SignInSignUp from './pages/SignupSigninPage/signup_signin_page.component';


function App() {
  return( 
    <div>
      <Header />
      <Routes> {/* Wrap Route elements inside <Routes> */}
        <Route path='/' element={<HomePage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/signin' element={<SignInSignUp />} />
      </Routes>
    </div>
  );
}

export default App;
