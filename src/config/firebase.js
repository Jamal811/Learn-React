// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBAnePm6G7Z8wYDkPZIY6MCHiPux5jGxvg",
  authDomain: "fir-31f95.firebaseapp.com",
  projectId: "fir-31f95",
  storageBucket: "fir-31f95.appspot.com",
  messagingSenderId: "740748638708",
  appId: "1:740748638708:web:613b2770f949547fbca1a1",
  measurementId: "G-L65MB9PG8Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
