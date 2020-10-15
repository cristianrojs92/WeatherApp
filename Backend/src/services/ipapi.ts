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
export async function location(ip : string){

  try {

    let data;
    //Obtenemos los datos con la 
    const response = await axios.default.get(`${URL_IPAPI}/${ip}`);
    if(response.status === 200) {
      data = response.data;
    }

    return data;
  } catch (error) {
    console.error(`ipapi.js location: ${error}`);
  }
 }