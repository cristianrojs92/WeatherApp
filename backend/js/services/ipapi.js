"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.location = void 0;
const axios = require("axios");
//Configuraciones
const config_1 = require("../config");
/**Retorna la localizacion segun la ip
*
* @param ip ip
*/
async function location(ip) {
    let location;
    try {
        //Obtenemos la localizacion
        const response = await axios.default.get(${config_1.URL_IPAPI}/${ip});
        if (response.status === 200 && response.data) {
            location = {
                city: response.data.city
            };
        }
    }
    catch (error) {
        console.error(ipapi.js location: ${error});
    }
    return location;
}
exports.location = location;
//# sourceMappingURL=ipapi.js.map