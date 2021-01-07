import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import "tailwindcss/tailwind.css";
import Spotify from "../../Components/Spotify";
import Weather from "../../Components/Weather";
import IMDB from "../../imdb/IMDB";
import Unsplash from "../../Components/Unsplash.js";
import { NewsContextProvider } from "../../news/NewsContext";
import News from "../../news/News";
import Covid from "../../Containers/Covid";
import Quiz from "../../Containers/Quiz";
import Coin from '../../Coin/Coin';
import Currency from '../../Currency/Currency'
import { Nav, Navbar, NavDropdown} from 'react-bootstrap';
import '../../App.css';


function AllWidgets() {
  const [spotifyState, setSpotifyState] = useState(null);
  const [spotWidget, setSpotWidget] = useState(false);

  let spotify;

  if (spotWidget) {
    spotify = <Spotify
    spotifyState={spotifyState}
    setSpotifyState={setSpotifyState}
  />;
  }

  const [covidWidget, setCovidWidget] = useState(false);

  let covid;

  if (covidWidget) {
    covid = <Covid />;
  }

  const [quizzWidget, setQuizzWidget] = useState(false);

  let quizz;

  if (quizzWidget) {
    quizz = <Quiz />;
  }

  const [imdbWidget, setImdbWidget] = useState(false);

  let imdb;

  if (imdbWidget) {
    imdb = <IMDB />;
  }

  const [newsWidget, setNewsWidget] = useState(false);

  let news
  if (newsWidget) {
    news = <NewsContextProvider>
      < News />
    </NewsContextProvider>;
  }

  const [weaWidget, setweaWidget] = useState(false);

  let weather
  if (weaWidget) {
    weather = <Weather />;
  }

  const [phoWidget, setPhoWidget] = useState(false);

  let photo
  if (phoWidget) {
    photo = <Unsplash />;
  }

  const [coinWidget, setCoinWidget] = useState(false);

  let coin
  if (coinWidget) {
    coin = <Coin />;
  }

  const [curWidget, setCurWidget] = useState(false);

  let current
  if (curWidget) {
    current = <Currency />;
  }


  return (
    <div className="App">
      <nav className="add-wid">
        <Navbar className="toggle">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Nav className="mr-auto">
                <NavDropdown title="Add widget" id="collasible-nav-dropdown">
                  <NavDropdown.Item onClick={() => setSpotWidget(!spotWidget)}>
                    Spotify
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => setCovidWidget(!covidWidget)}>
                    Covid
                    </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => setQuizzWidget(!quizzWidget)}>
                    Quizz
                    </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => setImdbWidget(!imdbWidget)}>
                    IMDB
                    </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => setNewsWidget(!newsWidget)}>
                    Le Monde
                    </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => setweaWidget(!weaWidget)}>
                    Weather
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => setPhoWidget(!phoWidget)} >
                    Unsplash
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => setCoinWidget(!coinWidget)}>
                    Coin
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={() => setCurWidget(!curWidget)}>
                    Currency
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              </Navbar>
            </nav>
      <section className="dash-board">
        {spotify}
        {covid}
        {quizz}
        {imdb}
        {news}
        {weather}
        {photo}
        {coin}
        {current}
      </section>
    </div>
  );
}

export default AllWidgets;
