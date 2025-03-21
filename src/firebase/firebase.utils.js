import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: 'Your_api_key',
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