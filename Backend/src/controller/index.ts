/*
 * locations.ts
 *
* Created on 14 de Octubre de 2020
 * Author Cristian Rojas <b>cristianrojs92@gmail.com</b>
 *
 */
import * as ipapi from "../services/ipapi";
import * as openweather from "../services/openweather";
import { Response, Request } from "express";

 /** Devuelve la localizacion actual segun la ip del cliente
 * 
 * @param req Request
 * @param res Response
 */
export async function location(req: Request, res: Response){

  try {

    //TODO: Quitar ip de prueba
    const ip = "181.46.137.30";
    //const ip = req.ip;

    //Obtenemos la localizacion segun la ip del cliente
    const data = await ipapi.location(ip);

    //Si obtuvimos datos resondemos la solicitud
    if(data) {
      res.status(Http.StatusCode.OK).json(data);
    } else {
      res.status(Http.StatusCode.INTERNAL_ERROR).json({message: "Ocurrio un error al obtener la localizacion"});
    }

  } catch (error) {
    res.status(Http.StatusCode.INTERNAL_ERROR).json({message: "Ocurrio un error al obtener la localizacion"});
    console.error(`locations.js location: ${error}`);
  }

 }

/** Devuelve el estado del tiempo actual
 * 
 * @param req Request
 * @param res Response
 */
export async function current(req: Request, res: Response){

  try {

    //Parametros
    let { city } = req.params;

    //Si no nos especificaron la cuidad, utilizamos la actual segun su ip
    if(city === undefined) {
      //TODO: Quitar ip de prueba
      const ip = "181.46.137.30";
      //const ip = req.ip;

      //Obtenemos la localizacion segun la ip del cliente
      const data = await ipapi.location(ip);

      //Si obtuvimos datos resondemos la solicitud
      if(data) {
        city = data.city;
      } else {
        res.status(Http.StatusCode.INTERNAL_ERROR).json({message: "Ocurrio un error al obtener la cuidad"});
      }
    }

    //Obtenemos informacion del clima actual
    const data = await openweather.currentWeather(city);

    //Si obtuvimos datos resondemos la solicitud
    if(data) {
      res.status(Http.StatusCode.OK).json(data);
    } else {
      res.status(Http.StatusCode.INTERNAL_ERROR).json({message: "Ocurrio un error al obtener la cuidad"});
    }
    
  } catch (error) {
    res.status(Http.StatusCode.INTERNAL_ERROR).json({message: "Ocurrio un error al obtener la cuidad"});
    console.error(`locations.js location: ${error}`);
  }

 }

 /**Devuelte el estado del tiempo durante los proximos 5 dias
 * 
 * @param req Request
 * @param res Response
 */
export async function forecast(req: Request, res: Response){

  try {

    //Parametros
    let { city } = req.params;

    //Si no nos especificaron la cuidad, utilizamos la actual segun su ip
    if(city === undefined) {
      //TODO: Quitar ip de prueba
      const ip = "181.46.137.30";
      //const ip = req.ip;

      //Obtenemos la localizacion segun la ip del cliente
      const data = await ipapi.location(ip);

      //Si obtuvimos datos resondemos la solicitud
      if(data) {
        city = data.city;
      } else {
        res.status(Http.StatusCode.INTERNAL_ERROR).json({message: "Ocurrio un error al obtener la cuidad"});
      }
    }

    //Obtenemos informacion del clima durando los proximos 5 dias
    const data = await openweather.forecastWeather(city);

    //Si obtuvimos datos resondemos la solicitud
    if(data) {
      res.status(Http.StatusCode.OK).json(data);
    } else {
      res.status(Http.StatusCode.INTERNAL_ERROR).json({message: "Ocurrio un error al obtener la cuidad"});
    }
    
  } catch (error) {
    res.status(Http.StatusCode.INTERNAL_ERROR).json({message: "Ocurrio un error al obtener la cuidad"});
    console.error(`locations.js location: ${error}`);
  }

 }