import * as request from "supertest";
import { app } from "../../server";

describe("Test del controlador weather", () => {

  test("Test de la ruta /v1/location", async () => {
    const response = await request(app).get("/v1/location").set('X-Real-IP', '181.46.137.30');

    //Verificamos le estado del la respuesta
    expect(response.status).toBe(200);

    //Verificamos si los datos son correctos
    const data = response.body;
    const isValid = locationIsValid(data);
    expect(isValid).toBe(true);

  });

  test("Test de la ruta /v1/current", async () => {
    const response = await request(app).get("/v1/current").set('X-Real-IP', '181.46.137.30');
    expect(response.status).toBe(200);

    //Verificamos si los datos son correctos
    const data = response.body;
    const isValid = currentIsValid(data);
    expect(isValid).toBe(true);
  });

  test("Test de la ruta /v1/forecast", async () => {
    const response = await request(app).get("/v1/forecast");
    expect(response.status).toBe(200);

    //Verificamos si los datos son correctos
    const data = response.body;
    const isValid = forecastIsValid(data);
    expect(isValid).toBe(true);
  });

  test("Test de la ruta /v1/forecast con datos de cuidad", async () => {
    const response = await request(app).get("/v1/forecast/Avellaneda");
    expect(response.status).toBe(200);

    //Verificamos si los datos son correctos
    const data = response.body;
    const isValid = forecastIsValid(data);
    expect(isValid).toBe(true);
  });

});

/**
 * Esta funcion se encarga de verificar si los datos de localizacion son validos
 * @param data Objeto a analizar
 */
const locationIsValid = (data : any) => {
  let isValid = false;
  const params = ['city'];
  isValid = existParam(data,params);
  return isValid;  
}

/**
 * Esta funcion se encarga de verificar si los datos del clima actual son validos
 * @param data Objeto a analizar
 */
const currentIsValid = (data : any) => {
  let isValid = false;
  const params = ['city', 'temp', 'description', 'tempMin', 'tempMax', 'humidity', 'date'];
  isValid = existParam(data,params);
  return isValid;
}

/**
 * Esta funcion se encarga de verificar si los datos del pronostico de los proximos 5 dias son validos.
 * @param data Objeto a analizar
 */
const forecastIsValid = (data : any) => {
  let isValid = false;

  //Verificamos si es un array
  if(Array.isArray(data) && data.length > 0) {

    //Recorremos el array
    for(const f of data) {
      const params = ['city', 'temp', 'description', 'tempMin', 'tempMax', 'humidity', 'date'];
      isValid = existParam(f, params);
    }
  }
  return isValid;
}


/**
 * Esta funcion se encarga de verificar si los parametros existen y tienen valor
 * @param data Objeto a analizar
 * @param params Parametros a verificar
 */
const existParam = (data : any, params : Array<string>) => {
  let exists = false;

    //Recorremos los parametros
    for(const param of params) {
      exists = false;

      //Verificamos si existe el parametro
      if(data) {
        if(data.hasOwnProperty(param)) {
          if(data[param]) {
            exists = true;
          }
        }
      }

      //Si el parametro no existe o no tiene valor
      if(!exists){

        //Salimos del bucle
        break;
      }
    }

    return exists;
}