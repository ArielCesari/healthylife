const recetasVegetarianas = ["Croquetas de zanahoria",
    "Berengenas napolitanas",
    "Souflé de acelga",
    "Croquetas de calabaza y espinaca",
    "Lasagna de espinaca o acelga",
    "Cazuela de vegetales",
    "Pizza de calabaza",
    "Tomates al horno",
    "Tortilla dietética"]


const recetasConCarne = [
    "Pechuguitas con salsa de limón",
    "Pollo a la naranja",
    "Bifecitos de ternera a la portuguesa",
    "Peceto con salsa de hongos",
    "Pechuguitas de pollo a la criolla",
    "Carne salteada con vegetales"
]


const imagenes = [
    "frase-1.jpg",
    "frase-2.jpg",
    "frase-3.jpg",
    "frase-4.jpg",
    "frase-5.jpg",
    "frase-6.jpg",
    "frase-7.jpg",
    "frase-9.jpg",
    "frase-0.jpg"

]

const graficos = [
    "grafico0.jpg",
    "grafico1.jpg",
    "grafico2.jpg",

]



/* Creo objeto literal con método a importar */
const mainController = {
    // Manejo del pedido get con ruta 
    index: (req, res) => {
        // comunicarse con el modelo, conseguir información
        return res.render("index",{graficos});
    },
    recetas: (req, res) => {

        return res.render("recetas", { recetasVegetarianas, recetasConCarne })
    },

    motivaciones: (req, res) => {

        return res.render("motivaciones",{imagenes})
    },

    consejos: (req, res) => {

        return res.render("consejos")
    },



}

// Exporto el objeto literal con los distintos métodos, que se usará en el enrutador por defecto */
module.exports = mainController;