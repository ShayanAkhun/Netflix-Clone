import { Banner } from "../../Components/Banner/Banner";
import { Navbar } from "../../Components/Navbar/Navbar";
import "./HomeScreen.css";

export function HomeScreen() {
  return (
    <div className="homeScreen">
      {/* Navbar */}
      <Navbar />

      {/* Banner*/}
      <Banner />

      {/* Rows */}
    </div>
  );
}
