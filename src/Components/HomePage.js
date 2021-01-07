import React from "react";
import './HomePage.css';
import emoji from "./emoji.png";
import Draggable from "react-draggable";
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div >

      <Draggable>
        <div className="titl">

          <img src={emoji} alt="" />

        </div>
      </Draggable>
      <div className="HomePage">
        <p className="intro">Discover our wonderful dashboard? Join us now!</p>
        <Link className="bt" to={'/login'} >Log in</Link>
        <Link className="b" to={'/signup'}>Sign up</Link>
      </div>
    </div >

  );
};

export default HomePage;