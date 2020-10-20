import React, { useState, useEffect }  from 'react';
import { AppContainer} from "./App.styles";
import WeatherMain from "../../Components/WeatherMain/WeatherMain";
import WeatherDays from "../../Components/WeatherDays/WeatherDays";
import CityFilter from "../../Components/CityFilter/CityFilter";
import * as WeatherAPI from "../../Services/WeatherApi.js";

function App() {
  const [weatherMain, setWeatherMain] = useState(null);
  const [weatherDays, setWeatherDays] = useState(null);

  const getWeather = async (city) => {
    const weatherMain = await WeatherAPI.getCurrentCity(city);
    const weatherDays = await WeatherAPI.getForecastCity(city);
    setWeatherMain(weatherMain);
    setWeatherDays(weatherDays);
  }

  const onSelect = async (city) => {
    await getWeather(city);
  }

  useEffect(() => {
    const fetchFirtsDataWeather = async() => {
      const location = await WeatherAPI.getLocation();
      const { city } = location;
      await getWeather(city);
    };
    fetchFirtsDataWeather();
  },[]);
  
  return (
    <AppContainer>
      <CityFilter onSelect={onSelect}/>
      {weatherMain && <WeatherMain weatherMain={weatherMain}/>}
      <WeatherDays weatherDays={weatherDays}/>
    </AppContainer>
  );
}

export default App;
