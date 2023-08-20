/* Requiero express */
const express = require('express');

/* Ejecuto express */
const app = express();

/* Requiere path */ 
const path = require("path");


/* Importo los enrutadores */
const mainRouter = require('./routes/mainRouter.js');


/* Archivos estáticos para buscar archivos en carpeta public */ 
app.use(express.static("public"));

/*Configuro ruta de vista y establezco el template engine a utilizar. */
app.set('views', path.resolve(__dirname, 'views'));
app.set("view engine", "ejs")

/* Usamos los enrutadores importados */

app.use("/",mainRouter);

const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log("Server corriendo en puerto ${port} http://localhost:3000"));







