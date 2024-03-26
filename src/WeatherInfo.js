import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="city">{props.data.city}</h1>
      <ul className="city-info">
        <li className="city-details">
          <FormattedDate date={props.data.date} />
        </li>
        <li className="city-details text-capitalize">
          {props.data.description}
        </li>
      </ul>
      <div className="row mb-5">
        <div className="col-6">
          <div className="clearfix d-flex">
            <div className="float-left">
              <WeatherIcon code={props.data.icon} size={52} />
            </div>
            <div className="float-left">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul className="weather-info">
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} m/s</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
