let valorMaximo = parseInt(prompt('Ingrese el valor máximo:'));
let numeroSecreto = Math.floor(Math.random()*valorMaximo) + 1;
let numeroUsuario;
let intentos = 1;
let maximoIntentos = 3;

while(numeroUsuario != numeroSecreto && valorMaximo != NaN)
{
    numeroUsuario = parseInt(prompt(`Me indicas un numero por favor entre 1 y ${valorMaximo}:`));

    //Este código realiza la comparacion.
    if (numeroUsuario == numeroSecreto) 
    {
        //Acertamos, fue verdadera la condición.
        alert(`Acertaste, el número es ${numeroUsuario}. Intentos: ${intentos} ${(intentos == 1) ? "vez" : "veces"}.`);
    }
    else
    {
        if(numeroUsuario < numeroSecreto)
        {
            alert('el numero secreto es mayor.');
        }
        else
        {
            alert('el numero secreto es menor.');
        }
        //Incrementamos el contador cuando no acierta.
        intentos ++;

        if(intentos > maximoIntentos)
        {
            alert(`Máximo de intentos alcanzado (${maximoIntentos}). El número era ${numeroSecreto}`);
            break;
        }
    }
}