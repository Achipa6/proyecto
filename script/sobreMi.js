let arrayFotos = ["images/imagenesSobremi/bloques.jpg","images/imagenesSobremi/caraColores.jpg","images/imagenesSobremi/codigo.jpg","images/imagenesSobremi/desktop.jpg","images/imagenesSobremi/letras.jpg","images/imagenesSobremi/raton.jpg"]
let lugar =0; //para indicar la posicion del array


function handleElementos() {
    let botonAvanza = document.getElementById('botolonAdelanta');
    botonAvanza.addEventListener('click' , adelantaFoto);

    let botonAtrasa = document.getElementById('botonAtrasa');
    botonAtrasa.addEventListener('click', atarasaFoto);

    let menu = document.getElementById('botonMenu');
    menu.addEventListener('click', verMenu)

    let leerMas = document.getElementById('leer')
    leerMas.addEventListener('click', leer)

    let leerMenos = document.getElementById("leerMenos")
    leerMenos.addEventListener('click',leerNo)
}
function leerNo() {
    let texto = document.getElementById('textoMas')
    texto.classList.add('sobremi__contenedorTexto-oculto')
    let boton = document.getElementById('leer')
    boton.style.display = 'block'
   
}
function leer() {
    let texto = document.getElementById('textoMas')
    texto.classList.remove('sobremi__contenedorTexto-oculto')
    let boton = document.getElementById('leer')
    boton.style.display = 'none'
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
function adelantaFoto() {
    lugar = lugar + 1; //para recorer el array
    if (lugar == 6) {
        lugar = 0;
    }
    let imagen = document.getElementById('imagen');
    imagen.src = arrayFotos[lugar];

}
function atarasaFoto() {
    lugar = lugar -1;
    if (lugar == -1) {
        lugar = 5;
    }
    let imagen = document.getElementById('imagen');
    imagen.src = arrayFotos[lugar];
    
}

window.onload = handleElementos;