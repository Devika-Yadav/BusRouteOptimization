// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth } from "firebase/auth";
import {getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBx8fv9r4Ool-nDmju52QQki6mGLxCxyHo",
  authDomain: "bus-route-optimization-5e249.firebaseapp.com",
  projectId: "bus-route-optimization-5e249",
  storageBucket: "bus-route-optimization-5e249.firebasestorage.app",
  messagingSenderId: "261852161384",
  appId: "1:261852161384:web:d8e70404c49905518062dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const db=getFirestore(app);
export default app;
