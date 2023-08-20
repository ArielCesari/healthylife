// Boton scroll hacia arriba 

document.getElementById("button-up").addEventListener("click", scrollUp);

function scrollUp() {

    let currentScroll = document.documentElement.scrollTop;
    
    if (currentScroll > 0) {
        window.requestAnimationFrame(scrollUp);
        window.scrollTo(0, currentScroll - (currentScroll / 10));
    }
}


// Hacer que el boton solo aparezca cuando no estamos en el top 

let buttonUp = document.getElementById("button-up");

window.onscroll = function(){

    let scroll = document.documentElement.scrollTop;

    if(scroll > 1100 ) {
       buttonUp.style.transform = "scale(1)";
    } else if (scroll < 500){
        buttonUp.style.transform = "scale(0)";
    }
}
