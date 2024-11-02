// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcl4h6iO6ngPCxmzUWi5JZKEUK5msTIAY",
  authDomain: "netflix-gpt-f2f0f.firebaseapp.com",
  projectId: "netflix-gpt-f2f0f",
  storageBucket: "netflix-gpt-f2f0f.firebasestorage.app",
  messagingSenderId: "208105138711",
  appId: "1:208105138711:web:ac25feb371d7b242ff8a52",
  measurementId: "G-44ZPT81PCT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth=getAuth()