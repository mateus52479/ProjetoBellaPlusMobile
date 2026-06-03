import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBad8y47P0RRvC9Sb1fgjmoe6owyclW1Ts",
  authDomain: "bella-plus-mulherao.firebaseapp.com",
  projectId: "bella-plus-mulherao",
  storageBucket: "bella-plus-mulherao.firebasestorage.app",
  messagingSenderId: "630776186556",
  appId: "1:630776186556:web:ea8a3e4d1966d7acfcf2b9"
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export { createUserWithEmailAndPassword, signInWithEmailAndPassword };

export default app;