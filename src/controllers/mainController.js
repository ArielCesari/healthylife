

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
    
    motivaciones: (req, res) => {
        
        return res.render("motivaciones")
    },
    
    consejos: (req, res) => {
        
        return res.render("consejos")
    },

    prueba: (req,res) => {
    
        let array = ["Argentina"," Brasil"," Colombia"," Chile"]    
        return res.render("prueba",{paises:array})
    }


}

// Exporto el objeto literal con los distintos métodos, que se usará en el enrutador por defecto */
module.exports = mainController;