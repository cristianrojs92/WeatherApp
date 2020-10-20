/*
 * server.ts
 *
 * Created on 14 de Octubre de 2020
 * Author Cristian Rojas <b>cristianrojs92@gmail.com</b>
 *
 */

//Componentes
import * as express from "express";
import * as helmet from "helmet";
import * as bodyParser from "body-parser";
import  routes from "./routes";
import * as cors from "cors";

//Constantes de configuracion
import * as config from "./config";

/**
 * Inicializa el servidor
 *
 */
async function start() {

  console.log(`server.js main: Servidor inicializado`);

  //Intanciamos la aplicacion de express
  const app : express.Express = express();

  //CORS
  app.use(cors())

  //Middleware de seguridad: protege los headers http del servidor.
  app.use(helmet());

  //Se parsea el body a json
  app.use(bodyParser.json());

  //Se agregan las rutas.
  routes(app);

  //Inicia el servidor.
  app.listen(config.APP_PORT, () => {
    console.log(`server.js main: El servidor esta corriendo en http://localhost:${config.APP_PORT}`);
  })

}

// Ejecuta la inicializacion
start();






