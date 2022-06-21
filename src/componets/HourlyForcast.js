import React from "react";
import sun from "../assets/images/sun.png";
import "./HourlyForcast.css";
const HourlyForcast = ({ tittle }) => {
  return (
    <>
      <h2>{tittle}</h2>
      <hr></hr>
      <div className="Hounly-forecast">
        <div className="forecasts">
          <p>4:30pm</p>
          <img className="hour-img" src={sun} alt="" />
          <p>30°</p>
        </div>
        <div className="forecasts">
          <p>4:30pm</p>
          <img className="hour-img" src={sun} alt="" />
          <p>30°</p>
        </div>
        <div className="forecasts">
          <p>4:30pm</p>
          <img className="hour-img" src={sun} alt="" />
          <p>30°</p>
        </div>
        <div className="forecasts">
          <p>4:30pm</p>
          <img className="hour-img" src={sun} alt="" />
          <p>30°</p>
        </div>
        <div className="forecasts">
          <p>4:30pm</p>
          <img className="hour-img" src={sun} alt="" />
          <p>30°</p>
        </div>
      </div>
    </>
  );
};

export default HourlyForcast;
