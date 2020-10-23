"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Dependencias
const express = require("express");
//Controladores
const weather_1 = require("../controller/weather");
/**
 * Esta funcion se encarga de agregar las rutas del servidor http
 * @param app Aplicacion de Express
 */
const add = (app) => {
    //Agregamos las rutas
    //Devuelve los datos de ubicación city según ip-api.
    addRoute(app, "GET" /* GET */, 'v1', 'location', weather_1.location);
    /* City es un parámetro opcional. Devuelve los datos de ubicación city o la ubicación actual según
       ip-api y el estado del tiempo actual. */
    addRoute(app, "GET" /* GET */, 'v1', 'current', weather_1.current);
    addRoute(app, "GET" /* GET */, 'v1', 'current/:city', weather_1.current);
    /*
      City es un parámetro opcional. Devuelve los datos de ubicación city o la ubicación actual según
      ip-api y el estado del tiempo a 5 días
    */
    addRoute(app, "GET" /* GET */, 'v1', 'forecast', weather_1.forecast);
    addRoute(app, "GET" /* GET */, 'v1', 'forecast/:city', weather_1.forecast);
};
/**
* Esta funcion se encarga de agregar las rutas del servidor http
* @param app Aplicacion de Express
* @param method Metodo http
* @param version Version de la API
* @param routeName Nombre de la ruta de la API
* @param controller Funcion que resuelve la ruta
*/
const addRoute = (app, method, version, routeName, controller) => {
    const apiRoute = `/${version}/${routeName}`;
    const router = express.Router();
    switch (method) {
        case "GET" /* GET */:
            router.get(apiRoute, controller);
            break;
        case "POST" /* POST */:
            router.post(apiRoute, controller);
            break;
        case "PUT" /* PUT */:
            router.delete(apiRoute, controller);
            break;
        case "DELETE" /* DELETE */:
            router.delete(apiRoute, controller);
            break;
    }
    app.use(router);
    console.log(`Se agrega ruta: ${apiRoute} (HTTP = ${method})`);
};
exports.default = add;
//# sourceMappingURL=weather.js.map