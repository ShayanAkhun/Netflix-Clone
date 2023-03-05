import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCmgA82CASJmvBROFh_A0r6esrxQS1ULDc",
  authDomain: "netflix-bf622.firebaseapp.com",
  projectId: "netflix-bf622",
  storageBucket: "netflix-bf622.appspot.com",
  messagingSenderId: "31771814560",
  appId: "1:31771814560:web:db0e413a05859fb761f7c5",
  measurementId: "G-26R0N0MHPS",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();

createUserWithEmailAndPassword()
  .then((userCredential) => {
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

export { auth };
export default db;
