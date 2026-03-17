function mostrar(res) {
    document.getElementById("resultado").innerText =
        JSON.stringify(res, null, 2);
}

const usuarios1 = [
    { id: 1, nombre: "Ana", edad: 20 },
    { id: 2, nombre: "Juan", edad: 15 },
    { id: 3, nombre: "Pedro", edad: 30 }
];
//1
let palabra = "sante"
function formatearNombre (str){
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function ej1(){
    mostrar(formatearNombre("sante"));
}


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

function ej2(){
    palabra = "que onda pa";
    mostrar(contarLetras(palabra));
}


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

function ej3(){
    mostrar(maximo(5000,135,3454));
}

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
function ej4(){
    mostrar(validarPassword());
}
//5
function sumarArray(){
    let numeros = [1, 2, 3, 4, 5909]
    let suma = 0

    for (let i = 0; i < numeros.length; i++){
        suma += numeros[i]
    }

    return suma
}
function ej5(){
    mostrar(sumarArray());
}
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

function ej6(){
    mostrar(mayorNumero());
}

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
function ej7(){
    mostrar(obtenerPares());
}
//8
const usuario = {
    nombre: "Ana",
    edad: 20,
    activo: false
};
function descripcionUsuario({ nombre, edad }) {
    return `${nombre} tiene ${edad} años`;
}
function ej8(){
    mostrar(descripcionUsuario(usuario));
}

//9
function activarUsuario(usuario) {
    usuario.activo = true;
} 
function ej9(){
    activarUsuario(usuario);
    mostrar(usuario.activo);
}
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

function ej10(){
    mostrar(precioTotal(productos));
}
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

function ej11(){
    mostrar(obtenerNombres(usuarios));
}
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

function ej12(){
    mostrar(obtenerMayores(pibes));
}

//13
const totalEdades = pibes.reduce((acumulador, pibe) => {
    return acumulador + pibe.edad;
}, 0);

function ej13(){
    mostrar(totalEdades);
}
//14
const producto = {

nombre:"Notebook",

precio:1000

}
function extraerPrecio({precio})
{
    return precio
}
function ej14(){
    mostrar(extraerPrecio(producto));
}
//15
const productoConStock = {
    ...producto,
    stock: 5
};

function ej15(){
    mostrar(productoConStock);
}

//16
function buscarProducto(productos, nombre) {
    return productos.find(p => p.nombre === nombre);
}
function ej16(){
    mostrar(buscarProducto(productos, "Mouse"));
}

//17
function productosCaros(productos) {
    return productos.filter(p => p.precio > 50);
}
function ej17(){
    mostrar(productosCaros(productos));
}

//18
function promedio(numeros) {
    let suma = numeros.reduce((acc, num) => acc + num, 0);
    return suma / numeros.length;
}
function ej18(){
    mostrar(promedio([10, 8, 6, 9]));
}


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

function ej19_1(){
    mostrar(obtenerUsuarios());
}


function ej19_2(){
    mostrar(obtenerUsuarioPorId(2));
}


function ej19_3(){
    mostrar(obtenerMayores());
}


function ej19_4(){
    mostrar(crearUsuario("Lucas", 22));
}

