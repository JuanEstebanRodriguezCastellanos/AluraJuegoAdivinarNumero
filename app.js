let numeroSecreto = 0;
let intentos = 0;
let listaNumeros = [];
let numeroMaximo = 10;
let numeroIntentos = 3;

function verificarIntento()
{
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

    if(numeroUsuario === numeroSecreto)
    {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos == 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else
    {
        if(numeroSecreto > numeroUsuario)
        {
            asignarTextoElemento('p','El número es mayor');
        }
        else
        {
            asignarTextoElemento('p','El número es menor');
        }

        intentos++;
        limpiarCampo();
    }

    return;
}

function condicionesIniciales()
{
    asignarTextoElemento('h1', 'Juego de número secreto');
    asignarTextoElemento('p', `Ingresa un número del 1 al ${numeroMaximo}`);
    listaNumeros = [];
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego()
{
    limpiarCampo();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function limpiarCampo()
{
    document.querySelector('#valorUsuario').value = '';
}

function asignarTextoElemento(elemento, texto)
{
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerText = texto;


    return;
}

function generarNumeroSecreto()
{
    let numeroGenerado = parseInt(Math.floor(Math.random()*numeroMaximo)) + 1;

    if(listaNumeros.length == numeroIntentos)
    {
        asignarTextoElemento('p', 'Ya no hay más intentos disponibles');
    }
    else
    {
        if(listaNumeros.includes(numeroGenerado))
        {
            return generarNumeroSecreto();
        }
        else
        {
            listaNumeros.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

condicionesIniciales();
