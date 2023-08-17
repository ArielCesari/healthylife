/* Requiero express */
const express = require('express');

/* Ejecuto express */
const app = express();


/* Importo los enrutadores */
const mainRouter = require('./routes/mainRouter.js');

/* Archivos estáticos para buscar archivos en carpeta public */ 
app.use(express.static("public"));

/* Usamos los enrutadores importados */
app.use("/",mainRouter);
app.use("/consejos",mainRouter);
app.use("/motivaciones",mainRouter);
app.use("/recetas",mainRouter);


const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log("Server corriendo en puerto ${port}"));







