import React from "react";
import "./Inputs.css";
import {
  UilAirplay,
  UilLocationPoint,
  UilSearch,
} from "@iconscout/react-unicons";

const Inputs = () => {
  return (
    <>
      <div className=" input-field">
        <div className="input-box ">
          <input
            className="city-input"
            type="text"
            placeholder="Search for city.."
          />
          <UilSearch className="icon"></UilSearch>
          <UilLocationPoint className="icon"></UilLocationPoint>
        </div>
        <div className="temp-btn">
          <button name="metric" className="temp-btn">
            {" "}
            °C
          </button>
          <p className="divider"> | </p>
          <button name="metric" className="temp-btn">
            {" "}
            °F
          </button>
        </div>
      </div>
    </>
    // <div>
    //   <div className="input-data">
    //     <input
    //       type="Search"
    //       placeholder="Search City"
    //       className="input-field"
    //     />
    //     <button className="search-button" type="button">
    //       Search
    //     </button>
    //   </div>

    //   <div className="information">
    //     <div className="info">
    //       <h2 className="location"></h2>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Inputs;
