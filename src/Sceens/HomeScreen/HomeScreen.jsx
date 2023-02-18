import { Banner } from "../../Components/Banner/Banner";
import { Navbar } from "../../Components/Navbar/Navbar";
import "./HomeScreen.css";
import Row from "../../Components/Rows/Row";
import requests from "../../Components/Api/tmdbAPIkey";

export function HomeScreen() {
  return (
    <div className="homeScreen">
      {/* Navbar */}
      <Navbar />

      {/* Banner*/}
      <Banner />

      {/* Rows */}
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentries" fetchUrl={requests.fetchDocumentries} />
    </div>
  );
}
