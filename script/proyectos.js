
let textos = document.getElementsByClassName('proyecto__contednedorDatos');


function handleAparece() {
    document.getElementById('rincones').addEventListener('click', muestraTexto);
    document.getElementById('acordeon').addEventListener('click', muestraTexto1)
    document.getElementById('hotel').addEventListener('click', muestraTexto2)
    document.getElementById('iturri').addEventListener('click', muestraTexto3)
    document.getElementById('junior').addEventListener('click', muestraTexto4)
    document.getElementById('ligthbox').addEventListener('click', muestraTexto5)
    document.getElementById('pestanas').addEventListener('click', muestraTexto6)
    document.getElementById('viajes').addEventListener('click', muestraTexto7)
    document.getElementById('cruzRincones').addEventListener('click', cierraRincones)
    document.getElementById('cruzAcordeon').addEventListener('click', cierraAcordeon)
    document.getElementById('cruzHotel').addEventListener('click', cierraHotel)
    document.getElementById('cruzIturri').addEventListener('click', cierraIturri)
    document.getElementById('cruzJunior').addEventListener('click', cierraJunior)
    document.getElementById('cruzLigthbox').addEventListener('click', cierraLightbox)
    document.getElementById('cruzPestana').addEventListener('click', cierraPestañas)
    document.getElementById('cruzViajes').addEventListener('click', cierraViajes)
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

function cierraRincones(e) {
    for (let i = 0; i < textos.length; i++) {

        textos[i].style.maxHeight = '0';
    }
}
function cierraAcordeon(e) {
    for (let i = 0; i < textos.length; i++) {

        textos[i].style.maxHeight = '0';
    }
}function cierraHotel(e) {
    for (let i = 0; i < textos.length; i++) {

        textos[i].style.maxHeight = '0';
    }
}function cierraIturri(e) {
    for (let i = 0; i < textos.length; i++) {

        textos[i].style.maxHeight = '0';
    }
}function cierraJunior(e) {
    for (let i = 0; i < textos.length; i++) {

        textos[i].style.maxHeight = '0';
    }
}function cierraLightbox(e) {
    for (let i = 0; i < textos.length; i++) {

        textos[i].style.maxHeight = '0';
    }
}function cierraPestañas(e) {
    for (let i = 0; i < textos.length; i++) {

        textos[i].style.maxHeight = '0';
    }
}function cierraViajes(e) {
    for (let i = 0; i < textos.length; i++) {

        textos[i].style.maxHeight = '0';
    }
}
function muestraTexto() {
    for (let i = 0; i < textos.length; i++) {
        textos[i].style.maxHeight = '0';
    }
    textos[0].style.maxHeight = '100rem'
}
function muestraTexto1() {
    for (let i = 0; i < textos.length; i++) {
        textos[i].style.maxHeight = '0';
    }
    textos[1].style.maxHeight = '100rem'
}
function muestraTexto2() {
    for (let i = 0; i < textos.length; i++) {

        textos[i].style.maxHeight = '0';
    }
    textos[2].style.maxHeight = '100rem'
}
function muestraTexto3() {
    for (let i = 0; i < textos.length; i++) {

        textos[i].style.maxHeight = '0';
    }
    textos[3].style.maxHeight = '100rem'
}
function muestraTexto4() {
    for (let i = 0; i < textos.length; i++) {

        textos[i].style.maxHeight = '0';
    }
    textos[4].style.maxHeight = '100rem'
}
function muestraTexto5() {
    for (let i = 0; i < textos.length; i++) {

        textos[i].style.maxHeight = '0';
    }
    textos[5].style.maxHeight = '100rem'
}
function muestraTexto6() {
    for (let i = 0; i < textos.length; i++) {

        textos[i].style.maxHeight = '0';
    }
    textos[6].style.maxHeight = '100rem'
}
function muestraTexto7() {
    for (let i = 0; i < textos.length; i++) {

        textos[i].style.maxHeight = '0';
    }
    textos[7].style.maxHeight = '100rem'
}

window.onload = handleAparece;