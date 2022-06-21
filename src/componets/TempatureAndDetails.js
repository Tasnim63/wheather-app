import React from "react";
import sun from "../assets/images/sun.png";
import "./TempatureAndDetails.css";
import {
  UilTemperatureEmpty,
  UilWindy,
  UilSearch,
} from "@iconscout/react-unicons";

const TempatureAndDetails = () => {
  return (
    <div className="weather-area">
      <div className="wea-condtion">
        <p>clear</p>

        <div className="weather-area">
          <div className="whether-detail">
            <img src={sun} alt="" />
            <p className="text">30°</p>
          </div>
          <div className="real-temp">
            <p>
              <UilTemperatureEmpty className="icons"></UilTemperatureEmpty>
              Real Feel:
              <span>30°</span>
            </p>
            <p>
              <UilTemperatureEmpty className="icons"></UilTemperatureEmpty>
              humidity:
              <span>65%</span>
            </p>
            <p>
              <UilWindy className="icons"></UilWindy>
              Wind speed:
              <span>11 km/h</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TempatureAndDetails;
