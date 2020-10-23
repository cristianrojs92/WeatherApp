//Dependencias
import * as express from "express";

//Controladores
import { location, current, forecast } from "../controller/weather";

/**
 * Esta funcion se encarga de agregar las rutas del servidor http
 * @param app Aplicacion de Express
 */
const add =  (app : express.Express) => {

  //Agregamos las rutas
  //Devuelve los datos de ubicación city según ip-api.
  addRoute(app,Http.Method.GET, 'v1', 'location', location);

  /* City es un parámetro opcional. Devuelve los datos de ubicación city o la ubicación actual según
     ip-api y el estado del tiempo actual. */
  addRoute(app,Http.Method.GET, 'v1', 'current',current);
  addRoute(app,Http.Method.GET, 'v1', 'current/:city',current);

  /*
    City es un parámetro opcional. Devuelve los datos de ubicación city o la ubicación actual según
    ip-api y el estado del tiempo a 5 días
  */
  addRoute(app,Http.Method.GET, 'v1', 'forecast',forecast);
  addRoute(app,Http.Method.GET, 'v1', 'forecast/:city',forecast);

 }


 /**
 * Esta funcion se encarga de agregar las rutas del servidor http
 * @param app Aplicacion de Express
 * @param method Metodo http
 * @param version Version de la API
 * @param routeName Nombre de la ruta de la API
 * @param controller Funcion que resuelve la ruta
 */
const addRoute = (app : express.Express, method : Http.Method, version : string, routeName : string, controller : any) => {

  const apiRoute = /${version}/${routeName};
  const router = express.Router();

  switch (method) {
    case Http.Method.GET:
      router.get(apiRoute, controller);
      break;
  
    case Http.Method.POST:
      router.post(apiRoute, controller);
      break;

    case Http.Method.PUT:
      router.delete(apiRoute, controller);
      break;

    case Http.Method.DELETE:
      router.delete(apiRoute, controller);
      break;
  }
  
  app.use(router);
  console.log(Se agrega ruta: ${apiRoute} (HTTP = ${method}))
}


export default add;