//varaibles
let numeroMaximo = 10
let numeroSecreto = Math.floor(Math.random()*numeroMaximo)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = "vez";
let maximosIntentos = 3;
console.log(numeroSecreto);

while (numeroUsuario != numeroSecreto) {
  numeroUsuario = parseInt(prompt(`Me indicas un numero entre 1 y ${numeroMaximo} por favor:` ));
  
  console.log(numeroUsuario);
  /*
    Este codigo realiza la comparacion 
    */
  if (numeroUsuario === numeroSecreto) {
    //acertamos ,fue verdadera la condicion
    alert(
      `Acertaste,el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos ==1? 'vez':'veces'}`
    );
  } else {
    if (numeroUsuario > numeroSecreto) {
      alert("El numero secreto es menor");
    } else {
      alert("el numero secreto es mayor");
    }
    //incrementamos el contador cuando no acierta
    //intentos = intentos + 1;
    //intentos +=1
    intentos++;

    //palabraVeces = "veces";
    if (intentos > maximosIntentos) {
      alert(`Llegaste al número máximo ${maximosIntentos} de intentos`);
      break;
    }
    //la condicion no se cumplio
    //alert("Lo siento,no acertaste en número")
  }
}
