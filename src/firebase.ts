// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsh2kwejkqPvgOOVY0UK-lAsYtMOFGRcc",
  authDomain: "bank-49ed8.firebaseapp.com",
  projectId: "bank-49ed8",
  storageBucket: "bank-49ed8.appspot.com",
  messagingSenderId: "1036696030182",
  appId: "1:1036696030182:web:3c91122db33f3aeed1a427",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const store = getStorage(app);