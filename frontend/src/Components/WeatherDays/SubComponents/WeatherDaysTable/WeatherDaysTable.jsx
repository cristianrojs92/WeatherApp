import React from 'react';

import { WeatherTable, WeatherTableBody, WeatherTableCell, WeatherTableHead,
         WeatherTableRow, WeatherTableContainer, WeatherLogo } from "./WeatherDaysTable.styles";

function Header() {
  const header = ['Día','Clima','Descripcion','Temperatura','Temp. min', 'Temp. max', 'Humedad'];
  return (
    <WeatherTableHead>
      <WeatherTableRow>
        {
          header.map((text,index) => <WeatherTableCell key={index} align="center">{text}</WeatherTableCell>)
        }
      </WeatherTableRow>
    </WeatherTableHead>
  );
}               

function Body({weatherDays}) {
  return (
    <WeatherTableBody>
      {
        weatherDays.map((weatherDay, index) => (
          <WeatherTableRow key={index}>
            <WeatherTableCell>{weatherDay.date}</WeatherTableCell>
            <WeatherTableCell>
              <WeatherLogo src={weatherDay.urlIcon}/>
            </WeatherTableCell>
            <WeatherTableCell>{weatherDay.description}</WeatherTableCell>
            <WeatherTableCell>{weatherDay.temp}</WeatherTableCell>
            <WeatherTableCell>{weatherDay.tempMin}</WeatherTableCell>
            <WeatherTableCell>{weatherDay.tempMax}</WeatherTableCell>
            <WeatherTableCell>{weatherDay.humidity}</WeatherTableCell>
          </WeatherTableRow>))
      }
    </WeatherTableBody>
  );
}

function WeatherDaysTable({ weatherDays }) {
  return (
    weatherDays &&
    <WeatherTableContainer>
      <WeatherTable>
        <Header/>
        <Body weatherDays={weatherDays}/>
      </WeatherTable>
    </WeatherTableContainer> 
  );
}

export default WeatherDaysTable;
