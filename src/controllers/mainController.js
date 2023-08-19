

/* Creo objeto literal con método a importar */
const mainController = {
    // Manejo del pedido get con ruta 
    index: (req, res) => {
        // comunicarse con el modelo, conseguir información
        return res.render("index");
    },
    recetas: (req, res) => {

        return res.render("recetas")
    },
    // Manejo del pedido get con ruta 
    motivaciones: (req, res) => {
        // comunicarse con el modelo, conseguir información
        return res.render("motivaciones")
    },
    // Manejo del pedido get con ruta 
    consejos: (req, res) => {
        // comunicarse con el modelo, conseguir información
        return res.render("consejos")
    }


}

// Exporto el objeto literal con los distintos métodos, que se usará en el enrutador por defecto */
module.exports = mainController;