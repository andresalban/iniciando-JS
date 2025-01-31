//varaibles
let numeroSecreto = 6;
let numeroUsuario = prompt("Me indicas un numero entre 1 y 10 por favor:");

console.log(numeroUsuario);
/*
Este codigo realiza 
la comparacion 
*/
if (numeroUsuario == numeroSecreto) {
    //acertamos ,fue verdadera la condicion
    alert(`Acertaste,el número es: ${numeroUsuario}`);
}else{
    //la condicion no se cumplio
alert("Lo siento,no acertaste en número")
}
