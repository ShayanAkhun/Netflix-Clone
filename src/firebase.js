import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCmgA82CASJmvBROFh_A0r6esrxQS1ULDc",
  authDomain: "netflix-bf622.firebaseapp.com",
  projectId: "netflix-bf622",
  storageBucket: "netflix-bf622.appspot.com",
  messagingSenderId: "31771814560",
  appId: "1:31771814560:web:db0e413a05859fb761f7c5",
  measurementId: "G-26R0N0MHPS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
