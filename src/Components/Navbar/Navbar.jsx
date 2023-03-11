import React from "react";
import "./Navbar.css";
import LogoSvg from "../../assets/logo/Netflix-Logo.wine .svg";
import { useNavigate } from "react-router-dom";

export function Navbar() {
  const [show, handleShow] = React.useState(false);
  const history = useNavigate();

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => {
      window.removeEventListener("scroll", transitionNavbar);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img className="nav__logo" src={LogoSvg} alt="netflix" />
        <img
          onClick={() => history.push("/profile")}
          className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="netflix"
        />
      </div>
    </div>
  );
}
