// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8G0LQqCEoHzLB7OgBlmlS7tz61LHFUhs",
  authDomain: "arthurapp-7c0d3.firebaseapp.com",
  projectId: "arthurapp-7c0d3",
  storageBucket: "arthurapp-7c0d3.appspot.com",
  messagingSenderId: "162785870597",
  appId: "1:162785870597:web:cff58abd71fe7f8817ad6c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);