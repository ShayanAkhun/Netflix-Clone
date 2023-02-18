import { useState } from "react";
import reactLogo from "./assets/react.svg";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { HomeScreen } from "./Sceens/HomeScreen/HomeScreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginScreen from "./Sceens/LoginScreen/LoginScreen";

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
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
