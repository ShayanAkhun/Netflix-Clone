import { useState, useEffect } from "react";
// Import the functions you need from the SDKs you need
import { HomeScreen } from "./Sceens/HomeScreen/HomeScreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginScreen from "./Sceens/LoginScreen/LoginScreen";
import { auth } from "./firebase";

function App() {
  const user = null;
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // Logged In

        console.log(userAuth);
      } else {
        // logged Out
      }
    });
    return unsubscribe;
  }, []);

  return (
    <div>
      {!user ? (
        <LoginScreen />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
