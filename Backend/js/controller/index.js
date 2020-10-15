"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.forecast = exports.current = exports.location = void 0;
/*
 * locations.ts
 *
* Created on 14 de Octubre de 2020
 * Author Cristian Rojas <b>cristianrojs92@gmail.com</b>
 *
 */
const ipapi = require("../services/ipapi");
const openweather = require("../services/openweather");
/**
*
* @param req Request
* @param res Response
*/
async function location(req, res) {
    try {
        //TODO: Quitar ip de prueba
        const ip = "181.46.137.30";
        //const ip = req.ip;
        //Obtenemos la localizacion segun la ip del cliente
        const data = await ipapi.location(ip);
        //Si obtuvimos datos resondemos la solicitud
        if (data) {
            res.status(200 /* OK */).json(data);
        }
        else {
            res.status(500 /* INTERNAL_ERROR */).json({ message: "Ocurrio un error al obtener la localizacion" });
        }
    }
    catch (error) {
        res.status(500 /* INTERNAL_ERROR */).json({ message: "Ocurrio un error al obtener la localizacion" });
        console.error(`locations.js location: ${error}`);
    }
}
exports.location = location;
/**
 *
 * @param req Request
 * @param res Response
 */
async function current(req, res) {
    try {
        //Parametros
        let { city } = req.params;
        //Si no nos especificaron la cuidad, utilizamos la actual segun su ip
        if (city === undefined) {
            //TODO: Quitar ip de prueba
            const ip = "181.46.137.30";
            //const ip = req.ip;
            //Obtenemos la localizacion segun la ip del cliente
            const data = await ipapi.location(ip);
            //Si obtuvimos datos resondemos la solicitud
            if (data) {
                city = data.city;
            }
            else {
                res.status(500 /* INTERNAL_ERROR */).json({ message: "Ocurrio un error al obtener la cuidad" });
            }
        }
        //Obtenemos informacion del clima actual
        const data = await openweather.currentWeather(city);
        //Si obtuvimos datos resondemos la solicitud
        if (data) {
            res.status(200 /* OK */).json(data);
        }
        else {
            res.status(500 /* INTERNAL_ERROR */).json({ message: "Ocurrio un error al obtener la cuidad" });
        }
    }
    catch (error) {
        res.status(500 /* INTERNAL_ERROR */).json({ message: "Ocurrio un error al obtener la cuidad" });
        console.error(`locations.js location: ${error}`);
    }
}
exports.current = current;
/**
*
* @param req Request
* @param res Response
*/
async function forecast(req, res) {
    try {
        //Parametros
        let { city } = req.params;
        //Si no nos especificaron la cuidad, utilizamos la actual segun su ip
        if (city === undefined) {
            //TODO: Quitar ip de prueba
            const ip = "181.46.137.30";
            //const ip = req.ip;
            //Obtenemos la localizacion segun la ip del cliente
            const data = await ipapi.location(ip);
            //Si obtuvimos datos resondemos la solicitud
            if (data) {
                city = data.city;
            }
            else {
                res.status(500 /* INTERNAL_ERROR */).json({ message: "Ocurrio un error al obtener la cuidad" });
            }
        }
        //Obtenemos informacion del clima durando los proximos 5 dias
        const data = await openweather.forecastWeather(city);
        //Si obtuvimos datos resondemos la solicitud
        if (data) {
            res.status(200 /* OK */).json(data);
        }
        else {
            res.status(500 /* INTERNAL_ERROR */).json({ message: "Ocurrio un error al obtener la cuidad" });
        }
    }
    catch (error) {
        res.status(500 /* INTERNAL_ERROR */).json({ message: "Ocurrio un error al obtener la cuidad" });
        console.error(`locations.js location: ${error}`);
    }
}
exports.forecast = forecast;
//# sourceMappingURL=index.js.map