import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      city: response.data.city,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      date: "Wednesday 07:00",
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row mt-3">
            <div className="col-9">
              <input
                type="text"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="submit-btn" />
            </div>
          </div>
        </form>
        <h1 className="city">{weatherData.city}</h1>
        <ul className="city-info">
          <li className="city-details">{weatherData.date}</li>
          <li className="city-details text-capitalize">
            {weatherData.description}
          </li>
        </ul>
        <div className="row mb-5">
          <div className="col-6">
            <div className="clearfix d-flex">
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                className="float-left"
              />
              <div className="float-left">
                <span className="temperature">
                  {Math.round(weatherData.temperature)}
                </span>
                <span className="unit">°C</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul className="weather-info">
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} m/s</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "36b1aa2d00565t7424oa4399fb630c11";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
