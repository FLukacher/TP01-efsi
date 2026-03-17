const usuarios1 = [
    { id: 1, nombre: "Ana", edad: 20 },
    { id: 2, nombre: "Juan", edad: 15 },
    { id: 3, nombre: "Pedro", edad: 30 }
];
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
//7
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
//8
const usuario = {
    nombre: "Ana",
    edad: 20,
    activo: false
};
function descripcionUsuario({ nombre, edad }) {
    return `${nombre} tiene ${edad} años`;
}
console.log(descripcionUsuario(usuario));
//9
function activarUsuario(usuario) {
    usuario.activo = true;
}
activarUsuario(usuario) 
console.log(usuario.activo)
//10
const productos = [
    { nombre: "Mouse", precio: 10 },
    { nombre: "Teclado", precio: 25 },
    { nombre: "Monitor", precio: 200 }
];

function precioTotal(productos) {
    let total = 0;

    for (let i = 0; i < productos.length; i++) {
        total += productos[i].precio;
    }

    return total;
}

console.log(precioTotal(productos));
//11
const usuarios = [

{nombre:"Ana", edad:17},

{nombre:"Juan", edad:25},

{nombre:"Pedro", edad:30}

]

function obtenerNombres(usuarios) {
    let nombres = [];

    for (let i = 0; i < usuarios.length; i++) {
        nombres.push(usuarios[i].nombre);
    }

    return nombres;
}

console.log(obtenerNombres(usuarios));
//12
const pibes = [
    { nombre: "Juan", edad: 25 },
    { nombre: "dantetoide", edad: 17 },
    { nombre: "Pedro", edad: 30 }
];

function obtenerMayores(pibes) {
    let mayores = [];

    for (let i = 0; i < pibes.length; i++) {
        if (pibes[i].edad >= 18) {
            mayores.push(pibes[i]);
        }
    }

    return mayores;
}

console.log(obtenerMayores(pibes));
//13
const totalEdades = pibes.reduce((acumulador, pibe) => {
    return acumulador + pibe.edad;
}, 0);

console.log(totalEdades);
//14
const producto = {

nombre:"Notebook",

precio:1000

}
function extraerPrecio({precio})
{
    console.log(precio)
}
extraerPrecio(producto)
//15
const productoConStock = {
    ...producto,
    stock: 5
};

console.log(productoConStock);

//16
function buscarProducto(productos, nombre) {
    return productos.find(p => p.nombre === nombre);
}

//17
function productosCaros(productos) {
    return productos.filter(p => p.precio > 50);
}
//18
function promedio(numeros) {
    let suma = numeros.reduce((acc, num) => acc + num, 0);
    return suma / numeros.length;
}

console.log(promedio([10, 8, 6, 9])); 

//19
function obtenerUsuarios() {
    return usuarios1;
}

function obtenerUsuarioPorId(id) {
    return usuarios1.find(u => u.id === id);
}

function obtenerMayores() {
    return usuarios1.filter(u => u.edad >= 18);
}

function crearUsuario(nombre, edad) {
    const nuevoUsuario = {
        id: usuarios1.length + 1,
        nombre,
        edad
    };

    usuarios1.push(nuevoUsuario);
    return nuevoUsuario;
}

console.log(obtenerUsuarios());
console.log(obtenerUsuarioPorId(2));
console.log(obtenerMayores());
console.log(crearUsuario("Lucas", 22));
console.log(obtenerUsuarios());