import React from 'react';
import WeatherDaysTable from './SubComponents/WeatherDaysTable/WeatherDaysTable';
function WeatherDays({ weatherDays }) {
  return (
    Array.isArray(weatherDays) && weatherDays.length > 0 &&
    <WeatherDaysTable weatherDays={weatherDays}/>
  );
}

export default WeatherDays;
