import { useState, useEffect } from "react";
import { HomeScreen } from "./Sceens/HomeScreen/HomeScreen";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginScreen from "./Sceens/LoginScreen/LoginScreen";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./Redux/Features/userSlice";
import ProfileScreen from "./Sceens/ProfileScreen/ProfileScreen";

function App() {
  const user = useSelector((state) => state.userSlice.user);
  // const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout);
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
            <Route path="/" element={<ProfileScreen />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
