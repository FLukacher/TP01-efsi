//1
function formatearNombre (str){
  return str.charAt(0).toUpperCase() + str.slice(1);
}
let palabra = "sante"
console.log(formatearNombre(palabra))

//2
function contarLetras(str) {
    let contador = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            contador++;
        }
    }
    return contador;
}

palabra = "que onda pa";
console.log(contarLetras(palabra))

//3
function maximo(num1, num2, num3) {
    let max = num1;

    if (num2 > max) {
        max = num2;
    }

    if (num3 > max) {
        max = num3;
    }

    return max;
}
let num1 = 500;
let num2 = 135;
let num3 = 3454;
console.log(maximo(num1, num2, num3))

//4
function validarPassword() {

let password = "dantemix9"
  let valido = false;

  if (password.length >= 8) {

    let caracteres = password.split("").map(c => Number(c));

    let i = 0;

    while (i < caracteres.length && !valido) {
      if (!isNaN(caracteres[i])) {
        valido = true;
      }
      i++;
    }
  }
  
  return valido;
}
console.log(validarPassword())
//5
function sumarArray(){
    let numeros = [1, 2, 3, 4, 5909]
    let suma = 0

    for (let i = 0; i < numeros.length; i++){
        suma += numeros[i]
    }

    return suma
}
 console.log(sumarArray())
 //6
 function mayorNumero(){
    let numeros = [1, 345345335, 3, 4, 5909]
    let mayor = 0

    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] > mayor){
            mayor = numeros[i]
        }
    }
    return mayor
}

console.log(mayorNumero())
function obtenerPares(){
    let numeros = [10, 20, 35, 40, 55];
    let pares = [];

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 == 0) {
            pares.push(numeros[i]);
        }
    }

    return pares;
}
console.log(obtenerPares());
