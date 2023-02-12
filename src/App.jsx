import { useState } from "react";
import reactLogo from "./assets/react.svg";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { HomeScreen } from "./Pages/HomeScreen/HomeScreen";

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
function App() {
  return (
    <div>
      <HomeScreen />
    </div>
  );
}

export default App;
