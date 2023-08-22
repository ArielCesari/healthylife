/* Requerimos express y guardamos la ejecución del método Router, que usaremos en el archivo */
const express = require('express');
const router = express.Router();

/*Importamos el controllador  de las rutas por defecto */
const mainController = require("../controllers/mainController.js");


/* Procesamos el pedido get por ruta */
router.get("/", mainController.index);
router.get("/recetas",mainController.recetas)
router.get("/motivaciones",mainController.motivaciones);
router.get("/consejos",mainController.consejos);






/* Exportamos la variable router ya con todas las rutas "guardadas", que se usará en app.js */
module.exports = router;

