import { DateTime } from "luxon";

const API_KEY = "e61b0c1c5c25ffa9d1c2ac461d7ac83d";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

// https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={API key}

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });
  console.log(url);
  return fetch(url)
    .then((res) => res.json())
    .then((data) => data);
};
const formetCurrentWeather = (data) => {
  const {
    coord: { lar, lon },
    main: { temp, feels_like, temp_max, temp_min, humidity },
    name,
    dt,
    sys: { country, sunrise, sunset },
    weather,
    wind: { speed },
  } = data;
  const { main: details, icon } = weather[0];
  return {
    lar,
    lon,
    temp,
    feels_like,
    temp_max,
    temp_min,
    humidity,
    name,
    dt,
    country,
    sunrise,
    sunset,
    details,
    icon,
    speed,
  };
};

const getFormettedWeatherData = async (searchParams) => {
  const formettedCurrentWeater = await getWeatherData(
    "weather",
    searchParams
  ).then(formetCurrentWeather);

  return formettedCurrentWeater;
};

export default getFormettedWeatherData;
