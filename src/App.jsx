import { useState, useEffect } from "react";
// Import the functions you need from the SDKs you need
import { HomeScreen } from "./Sceens/HomeScreen/HomeScreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginScreen from "./Sceens/LoginScreen/LoginScreen";
import { auth } from "./firebase";

// useEffect(()=>{
//     auth.onAuthStateChanged
// },[])
function App() {
  const user = null;

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
