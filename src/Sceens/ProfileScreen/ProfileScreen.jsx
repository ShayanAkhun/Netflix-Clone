import React from "react";
import { useSelector } from "react-redux";
import { Navbar } from "../../Components/Navbar/Navbar";
import { auth } from "../../firebase";
import "./ProfileScreen.css";
function ProfileScreen() {
  const user = useSelector((state) => state.userSlice.user);
  return (
    <div className="ProfileScreen">
      <Navbar />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>
              <button
                className="profileScreen__signout"
                onClick={() => auth.signOut()}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
