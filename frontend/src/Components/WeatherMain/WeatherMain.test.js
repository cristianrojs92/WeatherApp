import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import WeatherMain from './WeatherMain';

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

  const weatherMain = {
    city: "Quilmes",
    temp: 54,
    description: "lluvia moderada",
    feelsLike: 34,
    tempMin: 51,
    tempMax: 57,
    humidity: 67
  }
  //Con datos
  act(() => {
    render(<WeatherMain weatherMain={weatherMain}/>, container);
  });

  //Resultado esperado
  const resultExpected = `${weatherMain.city}${weatherMain.description}${weatherMain.temp} C°Temperatura minima ${weatherMain.tempMin} C°Temperatura maxima ${weatherMain.tempMax} C°Humedad ${weatherMain.humidity} %`;
  expect(container.textContent).toBe(resultExpected);

  //Sin datos.
  act(() => {
    render(<WeatherMain/>, container);
  });
  
  expect(container.textContent).toBe('');
});