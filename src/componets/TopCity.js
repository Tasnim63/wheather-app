import React from "react";
import "./TopCity.css";
const TopCity = () => {
  const cities = [
    {
      id: 1,
      tittle: "India ",
    },
    {
      id: 2,
      tittle: "London ",
    },
    {
      id: 3,
      tittle: "Bangladesh ",
    },
    {
      id: 4,
      tittle: "Austrilia ",
    },
    {
      id: 5,
      tittle: "Nepal ",
    },
  ];
  return (
    <div className="top-city">
      {cities.map((city) => (
        <button key={city.id} className="city-button">
          {city.tittle}
        </button>
      ))}
    </div>
  );
};

export default TopCity;
