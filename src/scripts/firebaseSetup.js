// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPRaRA9te7R_Ct5p9EbkRcYT89sTs5GBI",
  authDomain: "lms-application-2023.firebaseapp.com",
  projectId: "lms-application-2023",
  storageBucket: "lms-application-2023.appspot.com",
  messagingSenderId: "1098788550365",
  appId: "1:1098788550365:web:59391a3a1ca44d232ecd34",
  measurementId: "G-Y2TH64M2KS"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export const database = getFirestore(firebase);
export const cloudStorage = getStorage(firebase);
export const auth = getAuth(firebase);



