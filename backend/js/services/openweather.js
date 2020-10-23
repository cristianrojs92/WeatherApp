"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.forecastWeather = exports.currentWeather = void 0;
const axios = require("axios");
const moment = require("moment");
//Configuraciones
const config_1 = require("../config");
/**Retorna la informacion del tiempo actual
*
* @param city cuidad
*/
async function currentWeather(city) {
    try {
        let currentWeather;
        //Obtenemos los datos del clima actual 
        const response = await axios.default.get(${config_1.URL_OPENWEATHER}/weather?q=${city}&lang=es&units=metric&appid=${config_1.APIKEY_OPENWEATHER});
        if (response.status === 200 && response.data) {
            currentWeather = parseWeatherData(city, response.data);
        }
        return currentWeather;
    }
    catch (error) {
        console.error(openweather.js currentWeather: ${error});
    }
}
exports.currentWeather = currentWeather;
/**Retorna la informacion del tiempo durante los proximos 5 dias
 *
 * @param city cuidad
 */
async function forecastWeather(city) {
    try {
        let forecastWeather = [];
        //Obtenemos los datos con la 
        const response = await axios.default.get(${config_1.URL_OPENWEATHER}/forecast?q=${city}&lang=es&units=metric&appid=${config_1.APIKEY_OPENWEATHER});
        if (response.status === 200 && response.data) {
            if (Array.isArray(response.data.list)) {
                for (const item of response.data.list) {
                    const dateMoment = moment(item.dt_txt);
                    //Obtenemos el horario, Utilizamos la 6 de la tarde como horario principal
                    const hour = dateMoment.hour();
                    //Si son las 6 de la tarde
                    if (hour === 18) {
                        const currentWeather = parseWeatherData(city, item);
                        forecastWeather.push(currentWeather);
                    }
                }
            }
        }
        return forecastWeather;
    }
    catch (error) {
        console.error(openweather.js forecast: ${error});
    }
}
exports.forecastWeather = forecastWeather;
/**Parsea los datos del tiempo y retorna un objeto de tipo Weather
*
* @param data datos del tiempo
*/
function parseWeatherData(city, data) {
    let weather;
    //Almacenamos los datos del tiempo
    const format = (value) => {
        return Math.round(Number.parseFloat(value));
    };
    try {
        const dateMoment = moment(data.dt_txt);
        weather = {
            city,
            temp: format(data.main.temp),
            description: data.weather[0].description,
            urlIcon: config_1.URL_OPENWEATHER_ICON.replace('{icon}', data.weather[0].icon),
            tempMin: format(data.main.temp_min),
            tempMax: format(data.main.temp_max),
            humidity: format(data.main.humidity),
            date: dateMoment.format("DD/MM/YYYY")
        };
    }
    catch (error) {
        console.error(openweather.js parseWeatherData: ${error});
    }
    return weather;
}
//# sourceMappingURL=openweather.js.map