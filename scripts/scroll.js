// Boton scroll hacia arriba 

document.getElementById("button-up").addEventListener("click", scrollUp);

function scrollUp() {

    let currentScroll = document.documentElement.scrollTop;

    if (currentScroll > 0) {
        window.scrollTo(0, 0);
    }
}
