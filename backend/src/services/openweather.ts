import * as axios from "axios";
import * as moment from "moment";

//Configuraciones
import { URL_OPENWEATHER, APIKEY_OPENWEATHER, URL_OPENWEATHER_ICON } from "../config";

 /**Retorna la informacion del tiempo actual
 * 
 * @param city cuidad
 */
export async function currentWeather(city : string) : Promise<Weather.Weather>{

  try {

    let currentWeather : Weather.Weather;

    //Obtenemos los datos del clima actual 
    const response = await axios.default.get(`${URL_OPENWEATHER}/weather?q=${city}&lang=es&units=metric&appid=${APIKEY_OPENWEATHER}`);
    if(response.status === 200 && response.data) {
      currentWeather = parseWeatherData(city, response.data);
    }

    return currentWeather;
  } catch (error) {
    console.error(`openweather.js currentWeather: ${error}`);
  }
 }

/**Retorna la informacion del tiempo durante los proximos 5 dias
 * 
 * @param city cuidad
 */
export async function forecastWeather(city : string) : Promise<Array<Weather.Weather>>{

  try {

    let forecastWeather : Array<Weather.Weather> = [];
    //Obtenemos los datos con la 
    const response = await axios.default.get(`${URL_OPENWEATHER}/forecast?q=${city}&lang=es&units=metric&appid=${APIKEY_OPENWEATHER}`);
    if(response.status === 200 && response.data) {
      if(Array.isArray(response.data.list)) {
        for (const item of response.data.list) {

          const dateMoment = moment(item.dt_txt);
          //Obtenemos el horario, Utilizamos la 6 de la tarde como horario principal
          const hour : Number = dateMoment.hour();

            //Si son las 6 de la tarde
            if(hour === 18) {
              const currentWeather = parseWeatherData(city, item);
              forecastWeather.push(currentWeather)
            }
          }

        }
      }

    return forecastWeather;
  } catch (error) {
    console.error(`openweather.js forecast: ${error}`);
  }
 }

 /**Parsea los datos del tiempo y retorna un objeto de tipo Weather
 * 
 * @param data datos del tiempo
 */
function parseWeatherData(city : string, data : any) : Weather.Weather{

  let weather : Weather.Weather;

  //Almacenamos los datos del tiempo
  const format = (value : string) => {
    return Math.round(Number.parseFloat(value));
  }

  try {
    const dateMoment = moment(data.dt_txt);
    weather = {
      city,
      temp : format(data.main.temp),
      description: data.weather[0].description,
      urlIcon: URL_OPENWEATHER_ICON.replace('{icon}',data.weather[0].icon),
      tempMin: format(data.main.temp_min),
      tempMax: format(data.main.temp_max), 
      humidity: format(data.main.humidity),
      date: dateMoment.format("DD/MM/YYYY")
    }
    
  } catch (error) {
    console.error(`openweather.js parseWeatherData: ${error}`);
  }
  return weather;
}