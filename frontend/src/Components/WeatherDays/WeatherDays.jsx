import React from 'react';
import WeatherDaysTable from './SubComponents/WeatherDaysTable/WeatherDaysTable';
function WeatherDays({ weatherDays }) {
  return (
    weatherDays &&
    <WeatherDaysTable weatherDays={weatherDays}/>
  );
}

export default WeatherDays;
