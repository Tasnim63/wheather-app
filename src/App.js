import "./App.css";

import Home from "./componets/Home";
import getFormettedWeatherData from "./componets/services/Services";
// import getFormattedWeatherData from "./componets/services/Services";
// import getWeatherData from "./componets/services/Services";
function App() {
  const fetchWeather = async () => {
    const data = await getFormettedWeatherData({ q: "london" });
    console.log(data);
  };
  fetchWeather();
  return (
    <div className="App">
      <Home></Home>
    </div>
  );
}

export default App;
