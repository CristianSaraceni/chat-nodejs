var db = require("./connectionDB");

const sesionesCrear = "CALL SesionesCrear";
//create class
var Sesiones = {

    sesionesCrear: sesion => {
        return new Promise((resolve, reject) => {
          db.query(
            `${sesionesCrear}('${sesion.nombre}', '${sesion.nick}')`,
            (err, res) => {
              if (err) {
                reject(err);
              } else {
                resolve(res);
              }
            }
          );
        });
      }

};
module.exports = Sesiones;