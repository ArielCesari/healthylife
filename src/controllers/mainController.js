/* Requiero path para poderenviar los archivos HTML */
const path = require("path");


/* Creo objeto literal con método a importar */
const mainController = {
    // Manejo del pedido get con ruta 
    index: (req, res) => {
        // comunicarse con el modelo, conseguir información
        res.sendFile(path.resolve(__dirname, "../views/index.html"))
    }, // Manejo del pedido get con ruta 
    recetas: (req, res) => {
        // comunicarse con el modelo, conseguir información
        res.sendFile(path.resolve(__dirname, "../views/recetas.html"))
    },
    // Manejo del pedido get con ruta 
    motivaciones: (req, res) => {
        // comunicarse con el modelo, conseguir información
        res.sendFile(path.resolve(__dirname, "../views/motivaciones.html"))
    },
    // Manejo del pedido get con ruta 
    consejos: (req, res) => {
        // comunicarse con el modelo, conseguir información
        res.sendFile(path.resolve(__dirname, "../views/consejos.html"))
    }


}

// Exporto el objeto literal con los distintos métodos, que se usará en el enrutador por defecto */
module.exports = mainController;