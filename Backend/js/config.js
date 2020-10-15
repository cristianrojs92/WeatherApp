"use strict";
/*
 * config.ts
 *
 * Created on 14 de Octubre de 2020
 * Author Cristian Rojas <b>cristianrojs92@gmail.com</b>
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIKEY_OPENWEATHER = exports.URL_OPENWEATHER = exports.URL_IPAPI = exports.APP_PORT = void 0;
//Puerto del servicio
exports.APP_PORT = process.env.APP_PORT || 3001;
//IPAPI
exports.URL_IPAPI = process.env.URL_IPAPI || "http://ip-api.com/json";
//OPENWEATHER
exports.URL_OPENWEATHER = process.env.URL_IPAPI || "http://api.openweathermap.org/data/2.5";
exports.APIKEY_OPENWEATHER = process.env.APIKEY_OPENWEATHER || "16d18d507b433b85b9bee30bf16f8ac3";
//# sourceMappingURL=config.js.map