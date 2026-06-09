// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBad8y47P0RRvC9Sb1fgjmoe6owyclW1Ts",
  authDomain: "bella-plus-mulherao.firebaseapp.com",
  projectId: "bella-plus-mulherao",
  storageBucket: "bella-plus-mulherao.firebasestorage.app",
  messagingSenderId: "630776186556",
  appId: "1:630776186556:web:ea8a3e4d1966d7acfcf2b9",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore();
