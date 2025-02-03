//varaibles
let numeroSecreto = 6;
let numeroUsuario = 0;
let intentos = 1;
let palabraVeces= 'vez'
while (numeroUsuario != numeroSecreto) {
  numeroUsuario = prompt("Me indicas un numero entre 1 y 10 por favor:");

  console.log(numeroUsuario);
  /*
    Este codigo realiza la comparacion 
    */
  if (numeroUsuario == numeroSecreto) {
    //acertamos ,fue verdadera la condicion
    alert(`Acertaste,el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${palabraVeces}`);
  } else {
    if (numeroUsuario > numeroSecreto) {
      alert("El numero secreto es menor");
    } else {
      alert("el numero secreto es mayor");
    }
    //incrementamos el contador cuando no acierta
    intentos = intentos + 1;
    palabraVeces='veces'
    //la condicion no se cumplio
    //alert("Lo siento,no acertaste en número")
  }
}
