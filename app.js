let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
 
    //Compara a con b, retornar numero booleano true/false   
    if(numeroUsuario === numeroSecreto){//triple igual cuando los tipos de datos son garantizados
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`); //Se actualiza el parrafo p
        document.getElementById('reiniciar').removeAttribute('disabled');
    
    } else{
        //el usuario no acerto.
        if(numeroUsuario>numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
        }else{
            asignarTextoElemento('p','El numero secreto es mayor')
        }
        intentos++;
        limpiarCaja();
    }
    return;

} //Declaracion  de funcion

function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsuario').value ='';
}

function generarNumeroSecreto(){
     let numeroGenerado = Math.floor(Math.random()* numeroMaximo)+1;
     
     console.log(numeroGenerado);
     console.log(listaNumerosSorteados);
    //si, ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('P', 'Ya se sortearon todos los numeros posibles');
    }else{

     //si el numero generado esta incluido en la lista
     if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto(); //recursividad
        
     } else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
     }
    }
}
function condicionesIniciales(){//encapsulando mensajes de texto
    asignarTextoElemento('h1','Juego del numero secreto');
    asignarTextoElemento('p',`Ingresa un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar el numero aleatorio
    //inicializar el boton de intento
    condicionesIniciales();
    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    console.log(numeroSecreto);
}
condicionesIniciales();


//*******************************************************************************************


