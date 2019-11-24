var db = require("./connectionDB");
const salasObtener = "select * from salas";
//create class
var Salas = {
    //function to query all items
    salaObtener: () => {
      return new Promise((resolve, reject) => {
        db.query(
            salasObtener,
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
module.exports = Salas;