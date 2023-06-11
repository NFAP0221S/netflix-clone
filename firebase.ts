// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvQK4eSF0XIQ7g6k7Fx3iXh7f94ePyEEs",
  authDomain: "netflix-clone-230611.firebaseapp.com",
  projectId: "netflix-clone-230611",
  storageBucket: "netflix-clone-230611.appspot.com",
  messagingSenderId: "399592949353",
  appId: "1:399592949353:web:a0ccdd68ce0338ffa404f8",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
