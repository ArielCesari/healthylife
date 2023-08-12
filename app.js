/* Requiero express */
const express = require('express');

/* Requiero path */ 
const path = require('path');

/* Ejecuto express */
const app = express();

/* Creo ruta absoluta a la carpeta public */
const publicPath = path.resolve(__dirname, './public');

/* Archivos estáticos para buscar archivos en carpeta public */ 
app.use(express.static(publicPath));

/* Defino las diferentes rutas para manejar solicitudes HTTP */ 

app.get('/',(req,res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html'))
} )

app.get('/recetas',(req,res) => {
    res.sendFile(path.resolve(__dirname, './views/recetas.html'))
} )

app.get('/motivaciones',(req,res) => {
    res.sendFile(path.resolve(__dirname, './views/motivaciones.html'))
} )

app.get('/consejos',(req,res) => {
    res.sendFile(path.resolve(__dirname, './views/consejos.html'))
} )


/* Pongo a correr el servidor - app.listen(3000, () => console.log("Servidor corriendo en puerto " + "http://localhost:3000"))  */


 
const port = process.env.PORT || 3000;
app.listen(port, ()=> console.log("Server corriendo en puerto ${port}"));







