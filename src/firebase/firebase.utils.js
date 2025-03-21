// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth'

// const config = {
//     apiKey: "AIzaSyA4H3d4NrPQpqldbgji8AaWJONHuGtUTck",
//     authDomain: "crwn-db-1866a.firebaseapp.com",
//     projectId: "crwn-db-1866a",
//     storageBucket: "crwn-db-1866a.firebasestorage.app",
//     messagingSenderId: "178876977972",
//     appId: "1:178876977972:web:3519f0d3e31998d59e4b61",
//     measurementId: "G-93F8H2D3M7"
// }

// firebase.initializeApp(config);

// export const auth = firebase.auth();
// export const firestore = firebase.firestore();

// const provider = new firebase.auth.GoogleAuthProvider(); //this gives us access to the googleauthprovider class from the authentication library

// provider.setCustomerParameters({ prompt: 'select_account' });
// export const signInWithGoogle = () => auth.signInWithPopup();

// export default firebase;

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA4H3d4NrPQpqldbgji8AaWJONHuGtUTck",
  authDomain: "crwn-db-1866a.firebaseapp.com",
  projectId: "crwn-db-1866a",
  storageBucket: "crwn-db-1866a.firebasestorage.app",
  messagingSenderId: "178876977972",
  appId: "1:178876977972:web:3519f0d3e31998d59e4b61",
  measurementId: "G-93F8H2D3M7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth & Firestore instances
export const auth = getAuth(app);
export const firestore = getFirestore(app);

// Google Auth Provider
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => signInWithPopup(auth, provider);

export default app;