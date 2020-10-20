/*
 * ipapi.ts
 *
* Created on 14 de Octubre de 2020
 * Author Cristian Rojas <b>cristianrojs92@gmail.com</b>
 *
 */
import * as axios from "axios";

//Configuraciones
import { URL_IPAPI } from "../config";

 /**Retorna la localizacion segun la ip
 * 
 * @param ip ip
 */
export async function location(ip : string) : Promise<Weather.Location>{
  
  let location : Weather.Location;
  try {

    //Obtenemos la localizacion
    const response = await axios.default.get(`${URL_IPAPI}/${ip}`);
    if(response.status === 200 && response.data) {
      location = {
        city : response.data.city
      };
    }
  } catch (error) {
    console.error(`ipapi.js location: ${error}`);
  }
  return location;
 }