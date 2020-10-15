"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.location = void 0;
/*
 * ipapi.ts
 *
* Created on 14 de Octubre de 2020
 * Author Cristian Rojas <b>cristianrojs92@gmail.com</b>
 *
 */
const axios = require("axios");
//Configuraciones
const config_1 = require("../config");
/**
*
* @param ip ip
*/
async function location(ip) {
    try {
        let data;
        //Obtenemos los datos con la 
        const response = await axios.default.get(`${config_1.URL_IPAPI}/${ip}`);
        if (response.status === 200) {
            data = response.data;
        }
        return data;
    }
    catch (error) {
        console.error(`ipapi.js location: ${error}`);
    }
}
exports.location = location;
//# sourceMappingURL=ipapi.js.map