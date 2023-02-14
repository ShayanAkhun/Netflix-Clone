// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARBPP8-qanCH6HqsUlD44XhnzZb8iuFcI",
  authDomain: "test1-4b64b.firebaseapp.com",
  projectId: "test1-4b64b",
  storageBucket: "test1-4b64b.appspot.com",
  messagingSenderId: "790635175888",
  appId: "1:790635175888:web:4eeaa3a0ff41d720ab23d5",
  measurementId: "G-BV4J92H96M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
