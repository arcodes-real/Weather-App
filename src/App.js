import "./App.css";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import Forecast from "./components/Forecast";
import getFormattedWeatherData from "./services/weatherService";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // states to hold the query parameters : location and units [as per api endpoint structure]
  const [query, setQuery] = useState({ q: "mumbai" });
  const [units, setUnits] = useState("metric");
 // state to hold the weather data 
  const [weather, setWeather] = useState(null);

  // fetching the weather data 
  useEffect(() => {
    const fetchWeather = async () => {
      const message = query.q ? query.q : "current location.";
  // toast alert to indicate fetching weather data in progress
      toast.info("Fetching weather for " + message);

      // passing the query params to getFormattedWeatherData function which receives it
      // as serachParams defined in weatherService.js, which in turn sends the data to getWeatherData function 
      // reponsible for fetching data from the api
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        if(data.cod && data.cod === 404){
          toast.error("City not found.")
          setWeather(null)
        }
        toast.success(
          `Successfully fetched weather for ${data.name}, ${data.country}.`
        );

        setWeather(data);
      }).catch((err) =>{
        console.error("Error fetching weather data.", err);
        toast.error("Error fetching weather data. Probably City Not Found!")
        toast.error("Please refresh the page");
        setWeather(null);
      });
    };

    fetchWeather();
  }, [query, units]);

  // dynamically setting the background color: blue if temp is lower than threshold, yellowish-orange if temp is high than threshold: [default blue]
  const formatBackground = () => {
    if (!weather) return "from-cyan-700 to-blue-700";
    const threshold = 20;
    if (weather.temp <= threshold) return "from-cyan-700 to-blue-700";

    return "from-yellow-700 to-orange-700";
  };

  return (
    <div
      className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br  h-fit shadow-xl shadow-gray-400 ${formatBackground()}`}
    >
      <TopButtons setQuery={setQuery} />
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />

      {weather && (
        <div>
          <TimeAndLocation weather={weather} />
          <TemperatureAndDetails weather={weather} />

          <Forecast title="hourly forecast" items={weather.hourly} />
          <Forecast title="daily forecast" items={weather.daily} />
        </div>
      )}

      <ToastContainer autoClose={5000} theme="colored" newestOnTop={true} />
    </div>
  );
}

export default App;