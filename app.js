// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Este programa te dará de manera aleatoria el nombre de un amigo de una lista que tú selecciones.
let listaDeAmigos = [];
let amigoDeUsuario = '';
let amigoSecreto = '';
let sorteo = true;



//Función auxiliar para asignar texto a un elemento HTML
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


//Función auxiliar para limpiar la caja de texto
function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}


// Función que agrega amigos a la lista y borra la caja de texto
function agregarAmigo() {
    asignarTextoElemento('h2','Puedes agregar más amigos si quieres');
    amigoDeUsuario = document.getElementById('amigo').value;
    limpiarCaja();
    if (listaDeAmigos.includes(amigoDeUsuario)) {
        asignarTextoElemento('h2', 'Ese amigo ya está en la lista elije a otro');
    } else {
        if (amigoDeUsuario === '') {
            asignarTextoElemento('h2', 'No has ingresado ningún nombre, ingresa uno');
        }
        else {
        listaDeAmigos.push(amigoDeUsuario);
        actualizarLista();
        document.querySelector('.button-draw').removeAttribute('disabled');
        }
    }
}


// Agregar un evento que active agregarAmigo() al presionar Enter
document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('amigo');
    input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            agregarAmigo();
        }
    });
});


//Función para actualizar la lista en el HTML
function actualizarLista() {
    let listaHTML = document.querySelector('ul');
    listaHTML.innerHTML = '';
    listaDeAmigos.forEach(function(amigo) {
        let li = document.createElement('li');
        li.textContent = amigo;
        listaHTML.appendChild(li);
    });
}


//Función que elije un amigo al azar y reinicia el sorteo
function sortearAmigo() {
    if (sorteo === true) {
    document.querySelector('#amigo').setAttribute('disabled','true');
    let numeroGenerado =  Math.floor(Math.random()*listaDeAmigos.length);
    asignarTextoElemento('h2',`Tu amigo secreto es: ${listaDeAmigos[numeroGenerado]}`);
    //se cambia el texto del botón de sorteo a reiniciar
    document.querySelector('.button-draw').innerHTML = `
    <img src="assets/play_circle_outline.png" alt="Ícono para sortear">
    Reiniciar sorteo`
    sorteo = false;
    }
    else {
        reiniciarSorteo();
        document.getElementById('amigo').removeAttribute('disabled');
        asignarTextoElemento('h2','Puedes agregar más amigos si quieres');
        limpiarCaja();
        sorteo = true;
    }
}


// Función que reinicia el sorteo
function reiniciarSorteo() {
    listaDeAmigos = [];
    asignarTextoElemento('h2','La lista se ha reiniciado, puedes agregar nuevos amigos');
    //Se borra la lista en el HTML
    let listaHTML = document.querySelector('ul');
    listaHTML.innerHTML = ''
    //se cambia el texto del botón de reinicio a sorteo
    document.querySelector('.button-draw').innerHTML = `
    <img src="assets/play_circle_outline.png" alt="Ícono para sortear">
    Sortear amigo`;
    sorteo = true;
    document.querySelector('#amigo').setAttribute('disabled','false')
}
