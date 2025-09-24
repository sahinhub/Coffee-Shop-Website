// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTELQHPAeb9y_cozpV74Li9BrKk2nqOKA",
  authDomain: "coffee-shophub.firebaseapp.com",
  projectId: "coffee-shophub",
  storageBucket: "coffee-shophub.firebasestorage.app",
  messagingSenderId: "1045930732848",
  appId: "1:1045930732848:web:58b889c03ca0f628052cf5",
  measurementId: "G-4TLD63QF15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
