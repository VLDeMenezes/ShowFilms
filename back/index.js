import { app } from "./src/server.js";
import { DBcon } from "./src/config/DBcon.js";

DBcon()
  .then((res) => {
    app.listen(3000, () => {
      console.log("App escuchando en el puerto 3000");
    });
  })
  .catch((err) => {
    console.log("Error con la conexion con la Base de Datos");
  });
