import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";
import DisplayWeather from "./DisplayWeather";
import "./weather.css";
import open from './open.png';

function Weather() {
  const [weather, setWeather] = useState([]);
  const [form, setForm] = useState({
    city: "",
    country: "",
  });

  const APIKEY = "7dbf173d1c6f2fb32d8e3bc4985a582e";

  function weatherData(e) {
    if(e) e.preventDefault()
    if (form.city == "") {
      alert("Add city");
    } else {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&APPID=${APIKEY}`
      )
      .then((res) => res.json())
      .then((data) => setWeather({ data }));
    }
   
  }
  useEffect(() => {
    
    const timer = setTimeout(() => {  //set a timer
      if(weather.length === 0) return; // do not exec the timer if no one types a city

      weatherData(); //function to be repeated
      console.log(">> refreshed"); //optional just to keep track
    },1000) // I set the timer to 1 second, so the widget can refresh every second
    
    return () => clearTimeout(timer); // clearing the timer
  },[weather]); // to be executed when weather has changed

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name == "city") {
      setForm({ ...form, city: value });
    }
    if (name == "country") {
      setForm({ ...form, country: value });
    }
  };
  return (
    <Draggable>
    <div className="weather">
    <div className="title">
            <img src={open} alt=""/>
        </div>
      <br />
      <form>
        <input
          type="text"
          placeholder="city"
          name="city"
          onChange={(e) => handleChange(e)}
        />
        &nbsp; &nbsp; &nbsp;&nbsp;
        <input
          type="text"
          placeholder="Country"
          name="country"
          onChange={(e) => handleChange(e)}
        />
        <button className="getweather" onClick={(e) => weatherData(e)}>
          Find
        </button>
      </form>

      {/* {console.log(weather)} */}
      {weather.data != undefined ? (
        <div>
          <DisplayWeather data={weather.data} />
        </div>
      ) : null}
    </div>
    </Draggable>
  );
}

export default Weather;