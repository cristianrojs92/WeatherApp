import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import WeatherDays from './WeatherDays';

let container = null;
beforeEach(() => {
  // configurar un elemento del DOM como objetivo del renderizado
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // limpieza al salir
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("Redenriza los datos del tiempo actual", () => {
  
  const weatherDays = [{
    temp: 55,
    description: "nubes",
    urlIcon: "http://openweathermap.org/img/wn/04d@2x.png",
    tempMin: 55,
    tempMax: 56,
    humidity: 65,
    date: "20/10/2020"
  },
  {
    temp: 60,
    description: "soleado",
    urlIcon: "http://openweathermap.org/img/wn/04d@2x.png",
    tempMin: 76,
    tempMax: 0,
    humidity: 65,
    date: "21/10/2020"
  }]

  //Con datos
  act(() => {
    render(<WeatherDays weatherDays={weatherDays}/>, container);
  });

  //Columnas de la tabla
  const columnsTable="DíaClimaDescripcionTemperaturaTemp. minTemp. maxHumedad";

  //Datos del pronostico de la primer fila
  const firstRow = `${weatherDays[0].date}${weatherDays[0].description}${weatherDays[0].temp}${weatherDays[0].tempMin}${weatherDays[0].tempMax}${weatherDays[0].humidity}`;
  
  //Datos del pronosico de la segunda fila
  const secondRow = `${weatherDays[1].date}${weatherDays[1].description}${weatherDays[1].temp}${weatherDays[1].tempMin}${weatherDays[1].tempMax}${weatherDays[1].humidity}`;

  //Resultado esperado
  const resultExpected = `${columnsTable}${firstRow}${secondRow}`;

  expect(container.textContent).toBe(resultExpected);

  //Sin datos
  act(() => {
    render(<WeatherDays/>, container);
  });

  expect(container.textContent).toBe('');
});