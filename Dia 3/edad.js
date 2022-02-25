// condicionales
const argumentos = process.argv;
const edad = argumentos[2];
const mayoriaDeEdad = 18;
const limiteInferior = 0;
const limiteSuperior = 150;
console.log("La edad de la persona es :", edad);

// si
console.log("***Ejemplo 1");
if(edad >= mayoriaDeEdad) {
  console.log("Es mayor de edad");
} 

// si, sino
console.log("***Ejemplo 2");
if(edad >= mayoriaDeEdad) {
  console.log("Es mayor de edad");
} else {
  console.log("Es menor de edad");
}

// anidados
console.log("***Ejemplo 3");
if (edad >= limiteInferior && edad <= limiteSuperior) {
  if (edad >= mayoriaDeEdad) {
    console.log("Es mayor de edad");
  } else {
    console.log("Es menor de edad");
  }
} else {
  console.log("ERROR: La edad no es válida")
}