import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header  from './components/header/header.component';
import SignInSignUp from './pages/SignupSigninPage/signup_signin_page.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { onSnapshot } from "firebase/firestore";


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

       // Correct way to use onSnapshot in Firebase v9+
      onSnapshot(userRef, (snapShot) => {
        this.setState({
          currentUser: {
            id: snapShot.id,
            ...snapShot.data()
          }
        },()=>{
          console.log(this.state)
        })
      });
    }
      this.setState({currentUser: userAuth})
      console.log(this.state)
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return( 
      <div>
        <Header currentUser={this.state.currentUser} />
        <Routes> {/* Wrap Route elements inside <Routes> */}
          <Route path='/' element={<HomePage />} />
          <Route path='/shop' element={<ShopPage />} />
          <Route path='/signin' element={<SignInSignUp />} />
        </Routes>
      </div>
    );
  }
}

export default App;
