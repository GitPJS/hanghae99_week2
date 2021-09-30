// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqhyhfWKhWUgjsl3-dd0eE9OqWi-G8xv8",
  authDomain: "sparta-react-basic-3309a.firebaseapp.com",
  projectId: "sparta-react-basic-3309a",
  storageBucket: "sparta-react-basic-3309a.appspot.com",
  messagingSenderId: "741399050780",
  appId: "1:741399050780:web:3cab488cc76c7b89f03dd9",
  measurementId: "G-Q79M9846N4"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();
export {db};