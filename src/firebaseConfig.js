// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

console.log(process.env);
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBI_vIya6pwRkdF1EOE0OzE4hiC5mGR0QU",
  authDomain: "sweetloungeapp.firebaseapp.com",
  projectId: "sweetloungeapp",
  storageBucket: "sweetloungeapp.appspot.com",
  messagingSenderId: "78310012732",
  appId: "1:78310012732:web:c8f86049d6d2c7c7469039"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// db connection
export const db = getFirestore(app)
// storage connection
export const storage = getStorage(app)
//authentication service
export const auth = getAuth(app);