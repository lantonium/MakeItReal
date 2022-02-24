// var, let, const

var miVariable;
miVariable = 1;
console.log(miVariable);

// variables globales
var sumando1 = 5;
var sumando2 = 10;
var resultadoSuma = sumando1 + sumando2;
console.log("El resultado de la suma es: " + resultadoSuma);//concatenar (juntar cadenas)

//ES2015 >> let
let numeroLet;
numeroLet = 40;
console.log(numeroLet);

//ES2015 >> const
const numeroConst = 41;
console.log(numeroConst);

/*
Reglas: no pueden llevar espacios, no pueden tener caracteres especiales
Buenas prácticas en JS: camel case, nombre semánticos
MiVariables: pascal case
MIVARIABLE: upper case
mi_variable: snake case
miVariable: camel case <<<<<<<<<
mivariable: lower case
*/

/*Tipos de datos

Primitivas
1: numéricos
true: lógicos
"hola": cadenas 

Objetos
[]: arreglos
*/
let miArreglo = [2, 4, 6, 8];
let otroArreglo = [true, 2, "hola", 2, "hola", 2 , 2, true, [0]];
console.log("otroArreglo: ", otroArreglo);
otroArreglo.push("make");
console.log("otroArreglo: ", otroArreglo);
console.log("indexOf: ", otroArreglo.indexOf("hola"));//2
console.log("includes: ", otroArreglo.includes("hola"));//true
console.log("includes: ", otroArreglo.includes("hola2"));//false

let ventas = [10, 5, 2, 10, 11, 56, 101, 90, 70, 20, 11, 100];
console.log("posición 1: ", ventas[0]);
const tamanoArreglo = ventas.length;
console.log("posición 12: ", ventas[tamanoArreglo - 1]);
console.log("el tamaño del arreglo es: ", ventas.length);
console.log("ventas: ", ventas);

// manual 
const sumaElementos = ventas[0] + ventas[1] + ventas[2] + ventas[3] + ventas[4] + ventas[5] + ventas[6] + ventas[7] + ventas[8] + ventas[9] + ventas[10] + ventas[11];

const promedio = sumaElementos / tamanoArreglo;
console.log("El promedio es: ", promedio);

// ciclos
//1. while(condición) {}
//ejercicio 1
let indice1 = 1;
while(indice1 <= 10) {
  console.log("El valor de índice1 es: ", indice1);
  indice1 = indice1 + 1;
}
//ejercicio 2
let indice2 = 10;
while(indice2 >= 1) {
  console.log("El valor de índice2 es: ", indice2);
  indice2 = indice2 - 1;
}
//ejercicio 3
let contador = 0;
let indice3 = 10;
while(indice3 < 50) {
  contador = contador + 1;
  indice3 = indice3 + 1;
}
console.log("contador", contador);
//2. for (inicializador; condición; incremento/decremento)
//ejercicio 2 con for
for(let indice4 = 10; indice4 >= 1; indice4 = indice4 - 1) {
  console.log("El valor de índice4 en for es: ", indice4);
}
//indice5 = indice5 + 1 es lo mismo que indice5++
//indice5 = indice5 - 1 es lo mismo que indice5--
//promedio con for
let sumaElementosFor = 0;
for(let indice5 = 0; indice5 < tamanoArreglo; indice5++){
  sumaElementosFor = sumaElementosFor + ventas[indice5];
}
console.log("la suma de ventas es: ", sumaElementosFor);
console.log("El promedio de ventas es: ", sumaElementosFor / tamanoArreglo);


console.log("finaliza el programa");