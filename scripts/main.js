// Boton scroll hacia arriba 

document.getElementById("button-up").addEventListener("click",scrollUp);

function scrollUp(){

    let currentScroll = document.documentElement.scrollTop;

    if (currentScroll > 0 ){
        window.scrollTo(0,0);
    }
}








 //Validación de formulario desde el Front End 

window.addEventListener("load", () => {

    let form = document.querySelector("#form");


    let erroresHtml = document.querySelector("#errores");

    form.addEventListener("submit", (event) => {

        /* Creo un array de errores vacio. 
        En caso de ir detectando errores  los iremos agregando aquí */

        let errores = [];

        /* Nombre */

        if (form.name.value == "") {
            errores.push("Debe insertar su nombre");
            form.name.classList.remove("es-valido")
            form.name.classList.add("es-invalido")
        } else if (form.name.value.length < 4) {
            errores.push("El nombre debe tener al menos 4 carácteres");
            form.name.classList.remove("es-valido")
            form.name.classList.add("es-invalido")
        } else {
            form.name.classList.remove("es-invalido")
            form.name.classList.add("es-valido")

        }


        /* Apellido */

        if (form.apellido.value == "") {
            errores.push("Debe ingresar su apellido");
            form.apellido.classList.remove("es-valido")
            form.apellido.classList.add("es-invalido")
        } else if (form.apellido.value.length < 2) {
            errores.push("El apellido debe tener al menos 2 carácteres");
            form.apellido.classList.remove("es-valido")
            form.apellido.classList.add("es-invalido")
        } else {
            form.apellido.classList.remove("es-invalido")
            form.apellido.classList.add("es-valido")

        }

        /* Email */


        if (form.correo.value == "") {
            errores.push("Debe ingresar su email");
            form.correo.classList.remove("es-valido")
            form.correo.classList.add("es-invalido")
        } else if (form.correo.value.length < 6) {
            errores.push("Debe ingresar un email válido");
            form.correo.classList.remove("es-valido")
            form.correo.classList.add("es-invalido")
        } else {
            form.correo.classList.remove("es-invalido")
            form.correo.classList.add("es-valido")

        }


        /* Mensaje */


        if (form.mensaje.value == "") {
            errores.push("El mensaje no puede estar vacio");
            form.mensaje.classList.remove("es-valido")
            form.mensaje.classList.add("es-invalido")
        } else if (form.mensaje.value.length < 100) {
            errores.push("El mensaje es demasiado corto");
            form.mensaje.classList.remove("es-valido")
            form.mensaje.classList.add("es-invalido")
        } else {
            form.mensaje.classList.remove("es-invalido")
            form.mensaje.classList.add("es-valido")

        };

        /* Chequeo de errores en pantalla  */

        if (errores.length > 0) {

            event.preventDefault();

            erroresHtml.innerHTML = "";
            for (let i = 0; i < errores.length; i++) {
                erroresHtml.innerHTML += "<li>" + errores[i] + "</li>";
            };
        } else {
            erroresHtml.innerHTML = "";
            form.submit();


        }
    })

})




