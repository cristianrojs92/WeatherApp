"use strict";
/*
 * openweather.ts
 *
 * Created on 14 de Octubre de 2020
 * Author Cristian Rojas <b>cristianrojs92@gmail.com</b>
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.forecastWeather = exports.currentWeather = void 0;
const axios = require("axios");
//Configuraciones
const config_1 = require("../config");
/**
*
* @param city cuidad
*/
async function currentWeather(city) {
    try {
        let data;
        //Obtenemos los datos con la 
        const response = await axios.default.get(`${config_1.URL_OPENWEATHER}/weather?q=${city}&appid=${config_1.APIKEY_OPENWEATHER}`);
        if (response.status === 200) {
            data = response.data;
        }
        return data;
    }
    catch (error) {
        console.error(`openweather.js currentWeather: ${error}`);
    }
}
exports.currentWeather = currentWeather;
/**
 *
 * @param city cuidad
 */
async function forecastWeather(city) {
    try {
        let data;
        //Obtenemos los datos con la 
        const response = await axios.default.get(`${config_1.URL_OPENWEATHER}/forecast?q=${city}&appid=${config_1.APIKEY_OPENWEATHER}`);
        if (response.status === 200) {
            data = response.data;
        }
        return data;
    }
    catch (error) {
        console.error(`openweather.js forecast: ${error}`);
    }
}
exports.forecastWeather = forecastWeather;
//# sourceMappingURL=openweather.js.map