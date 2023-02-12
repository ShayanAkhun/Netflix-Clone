import React from "react";
import "../Banner/banner.css";

export function Banner() {
  const [movie, setMovie] = React.useState([]);

  React.useEffect(() => {}, []);

  function turncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/c/cd/Black_flag.svg")`,
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Movie Name</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {turncate(
            `This is a test description 
            This is a test description
            This is a test description
            This is a test description
            This is a test description
        `,
            70
          )}
        </h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}
