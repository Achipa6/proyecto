function handleProyectos() {
    let arrayProyectos = document.getElementsByClassName('proyectos__contenedorCard');
    for (let i = 0; i < arrayProyectos.length; i++) {
        arrayProyectos[i].addEventListener('mouseenter', muestraTexto);
        arrayProyectos[i].addEventListener('mouseleave', ocultaTexto);
    }
    let menu = document.getElementById('botonMenu');
    menu.addEventListener('click', verMenu)
}
function verMenu() {
    let menu = document.getElementById('menu');
    menu.classList.toggle('ver');/**para añadir o no (porque es toggle) la clase muestrate a lista */

    if (menu.classList.contains("ver") == true) {
        let cruz = document.getElementById('botonMenu');
        cruz.innerHTML =  '<i class="fa-solid fa-xmark"></i>'; /**para cambiar barras por x */
    }else{
        let cruz = document.getElementById('botonMenu');
        cruz.innerHTML =  '<i class="fa-solid fa-bars"></i>'; /**para cambiar x por barras */
    }
}
function muestraTexto(e) {
    let proyecto = e.target
    proyecto.children[1].style.display = 'flex';
    
}
function ocultaTexto(e) {
    let proyectos = e.target
    proyectos.children[1].style.display = 'none'
}
window.onload  = handleProyectos;