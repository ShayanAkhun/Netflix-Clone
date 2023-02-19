import React from "react";
import "./signUpScreen.css";
import { auth } from "../../firebase";

function SignUpScreen() {
  const emailRef = React.useRef(null);
  const passwordRef = React.useRef(null);

  const register = (e) => {
    e.preventDefault();
  };
  const sigIn = (e) => {
    e.preventDefault();
  };

  return (
    <div className="signUpScreen">
      <form>
        <h1>Sign In</h1>
        <input placeholder="Email" type="Email" />
        <input placeholder="Password" type="Password" />
        <button type="submit" onClick={sigIn}>
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
