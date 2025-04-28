// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth} from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7qPa4JOL-DYEYblDR8R_CKlEi7yciNyg",
  authDomain: "netflixgpt-77.firebaseapp.com",
  projectId: "netflixgpt-77",
  storageBucket: "netflixgpt-77.firebasestorage.app",
  messagingSenderId: "48610478946",
  appId: "1:48610478946:web:ba9a8072646ab8b55c7a3b",
  measurementId: "G-11ER8TZWPG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 
export const auth = getAuth();