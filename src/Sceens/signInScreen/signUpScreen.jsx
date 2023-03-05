import React from "react";
import "./signUpScreen.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../firebase";

function SignUpScreen() {
  const emailRef = React.useRef(null);
  const passwordRef = React.useRef(null);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");
  const [user, setUser] = React.useState({});

  const register = (e) => {
    e.preventDefault();
  };
  const sigIn = (e) => {
    e.preventDefault();
  };
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password);
    } catch (e) {
      setError(e.message);
      console.log(e.message, "not working bro");
    }
  };

  React.useEffect(() => {
    const isUserSignedIn = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });
    return isUserSignedIn();
  }, []);

  return (
    <div className="signUpScreen">
      <form onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        <input
          ref={emailRef}
          placeholder="Email"
          type="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          ref={passwordRef}
          placeholder="Password"
          type="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>
          Sign In
        </button>

        <h4>
          <span className="signUp__gray"> New to Netflix?</span>
          <span className="signUp__link" onClick={register}>
            Sign Up now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignUpScreen;
