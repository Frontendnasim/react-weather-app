import React from "react";
import "./Weather.css";

export default function Weather() {
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
      <h1 className="city">New York</h1>
      <ul className="city-info">
        <li className="city-details">Friday 3.00</li>
        <li className="city-details">Clear</li>
      </ul>
      <div className="row mb-5">
        <div className="col-6">
          <div className="clearfix d-flex">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="Clear"
              className="float-left"
            />
            <div className="float-left">
              <span className="temperature">-1</span>
              <span className="unit">°C</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul className="weather-info">
            <li>Precipitation: 0%</li>
            <li>Humidity: 42%</li>
            <li>Wind: 3 m/s</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
