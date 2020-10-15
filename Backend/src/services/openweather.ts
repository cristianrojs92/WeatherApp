/*
 * openweather.ts
 *
 * Created on 14 de Octubre de 2020
 * Author Cristian Rojas <b>cristianrojs92@gmail.com</b>
 *
 */

import * as axios from "axios";

//Configuraciones
import { URL_OPENWEATHER, APIKEY_OPENWEATHER } from "../config";

 /**Retorna la informacion del tiempo actual
 * 
 * @param city cuidad
 */
export async function currentWeather(city : string){

  try {

    let data;
    //Obtenemos los datos con la 
    const response = await axios.default.get(`${URL_OPENWEATHER}/weather?q=${city}&units=imperial&appid=${APIKEY_OPENWEATHER}`);
    if(response.status === 200) {
      data = response.data;
    }

    return data;
  } catch (error) {
    console.error(`openweather.js currentWeather: ${error}`);
  }
 }

/**Retorna la informacion del tiempo durante los proximos 5 dias
 * 
 * @param city cuidad
 */
export async function forecastWeather(city : string){

  try {

    let data;
    //Obtenemos los datos con la 
    const response = await axios.default.get(`${URL_OPENWEATHER}/forecast?q=${city}&units=imperial&appid=${APIKEY_OPENWEATHER}`);
    if(response.status === 200) {
      data = response.data;
    }

    return data;
  } catch (error) {
    console.error(`openweather.js forecast: ${error}`);
  }
 }
