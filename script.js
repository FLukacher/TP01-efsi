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