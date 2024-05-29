// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqq1PONdIFj3b31eCI48DhVkegtKIEY8k",
  authDomain: "trust-39499.firebaseapp.com",
  projectId: "trust-39499",
  storageBucket: "trust-39499.appspot.com",
  messagingSenderId: "90044628928",
  appId: "1:90044628928:web:7c76e35f1b88e9ee959225",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const store = getStorage(app);