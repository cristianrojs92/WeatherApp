//Componentes
import * as express from "express";
import * as helmet from "helmet";
import * as bodyParser from "body-parser";
import  routes from "./routes/weather";
import * as cors from "cors";

//Constantes de configuracion
import * as config from "./config";

//Intanciamos la aplicacion de express
export const app : express.Express = express();

//CORS
app.use(cors())

//Middleware de seguridad: protege los headers http del servidor.
app.use(helmet());

//Se parsea el body a json
app.use(bodyParser.json());

//Se agregan las rutas.
routes(app);


/**
 * Inicializa el servidor
 *
 */
async function start() {

  console.log(server.js main: Servidor inicializado);

  //Inicia el servidor.
  app.listen(config.APP_PORT, () => {
    console.log(server.js main: El servidor esta corriendo en http://localhost:${config.APP_PORT});
  })

}

// Ejecuta la inicializacion
start();







