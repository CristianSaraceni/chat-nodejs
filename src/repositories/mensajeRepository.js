var db = require("./connectionDB");

const mensajesCrear = "CALL MensajesCrear";


//create class
var Mensajes = {

    mensajesCrear: mensaje => {
        return new Promise((resolve, reject) => {
          db.query(
            `${mensajesCrear}('${mensaje.texto}', '${mensaje.nick}', '${mensaje.nombreSala}')`,
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
module.exports = Mensajes;