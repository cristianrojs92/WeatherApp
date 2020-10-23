"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
//Componentes
const express = require("express");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const weather_1 = require("./routes/weather");
const cors = require("cors");
//Constantes de configuracion
const config = require("./config");
//Intanciamos la aplicacion de express
exports.app = express();
//CORS
exports.app.use(cors());
//Middleware de seguridad: protege los headers http del servidor.
exports.app.use(helmet());
//Se parsea el body a json
exports.app.use(bodyParser.json());
//Se agregan las rutas.
weather_1.default(exports.app);
/**
 * Inicializa el servidor
 *
 */
async function start() {
    console.log(`server.js main: Servidor inicializado`);
    //Inicia el servidor.
    exports.app.listen(config.APP_PORT, () => {
        console.log(`server.js main: El servidor esta corriendo en http://localhost:${config.APP_PORT}`);
    });
}
// Ejecuta la inicializacion
start();
//# sourceMappingURL=server.js.map