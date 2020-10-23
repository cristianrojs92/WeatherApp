//Utilidades
import * as axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;

export async function getLocation() {
  try {
    let location;
    let url = ${API_BASE}/v1/location;
    let response = await axios.default.get(url);
    if(response.status === 200) {
      location = response.data;
    }
    return location;
  } catch (error) {
    console.log('[getLocation] Ocurrio un error al obtener la localizacion' + error);
  }
}

export async function getCurrentCity(nameCity) {
  try {
    let city;
    let url = (nameCity) ? ${API_BASE}/v1/current/${nameCity} : ${API_BASE}/v1/current;
    let response = await axios.default.get(url);
    if(response.status === 200) {
      city = response.data;
    }
    return city;
  } catch (error) {
    console.log('[getCurrentCity] Ocurrio un error al obtener el clima actual' + error);
  }
}

export async function getForecastCity(nameCity) {
  try {
    let forecast;
    let url = (nameCity) ? ${API_BASE}/v1/forecast/${nameCity} : ${API_BASE}/v1/forecast;
    let response = await axios.default.get(url);
    if(response.status === 200) {
      forecast = response.data;
    }
    return forecast;
  } catch (error) {
    console.log('[getForecastCity] Ocurrio un error al obtener el clima de los proximos 5 dias' + error);
  }
}


