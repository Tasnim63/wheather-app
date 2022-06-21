import React from "react";
import "./Home.css";
import HourlyForcast from "./HourlyForcast";
import Inputs from "./Inputs";
import TempatureAndDetails from "./TempatureAndDetails";
import TimeLocation from "./TimeLocation";
import TopCity from "./TopCity";
const Home = () => {
  return (
    <>
      <div className="search-area">
        <div className="box">
          <TopCity></TopCity>
          <Inputs></Inputs>
          <TimeLocation></TimeLocation>
          <TempatureAndDetails></TempatureAndDetails>
          <HourlyForcast tittle="Hourly forecast"></HourlyForcast>
          <HourlyForcast tittle="Daily forecast"></HourlyForcast>
        </div>
      </div>
    </>
  );
};

export default Home;
