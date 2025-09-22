// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

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


function limpiarCaja() {
    document.querySelector('#amigo').value = '';
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

// Agregar un evento que active agregarAmigo() al presionar Enter
document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('amigo');
    input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            agregarAmigo();
        }
    });
});

function actualizarLista() {
    let listaHTML = document.querySelector('ul');
    listaHTML.innerHTML = '';
    listaDeAmigos.forEach(function(amigo) {
        let li = document.createElement('li');
        li.textContent = amigo;
        listaHTML.appendChild(li);
    });
}




/*Pedazo de código del juego del número secreto

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        //Si el numero generado está incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();*/