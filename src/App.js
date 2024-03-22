import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by{" "}
          <a href="https://github.com/Frontendnasim" target="_blank">
            Nasim Shiroodi
          </a>{" "}
          and is{" "}
          <a href="https://github.com/Frontendnasim/react-weather-app">
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
