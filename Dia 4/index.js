//Operador ternario
//1. ejecutar instrucción
const num = 10;

num > 15 ? console.log("es mayor que 15") : console.log("es menor que 15");
// determinar si el número está dentro de un rango
const resultado = num >= 0 && num <= 17;

resultado ? 
  console.log("es menor de edad") 
: console.log("es mayor de edad");

//2. evaluar una expresión 
const respuesta = resultado ? "es menor de edad" : "es mayor de edad";
console.log("respuesta", respuesta);

const multiplicacion = !resultado ? 5 * 10 : 40 * 2 * 30;
console.log("multiplicacion", multiplicacion);

const persona1 = {
  nombre: "Juana",
  apellido: "Perez",
  lugarNacimiento: {
    pais:"CO",
    ciudad: "BAQ"
  }
};
console.log("la edad de "+persona1.nombre+" es: "+persona1.edad+" y nació en: "+persona1.lugarNacimiento.ciudad+" - "+persona1.lugarNacimiento.pais); //edad undefined

// optional chaining (no funciona en esta versión de nodejs en replit, pero pueden probar en la consola de chrome)
const persona2 = {
  nombre: "Pedro",
  apellido: "Perez",
  edad: 20
};
console.log("la edad de "+persona2.nombre+" es: "+persona2.edad+" y nació en: "+persona2.lugarNacimiento?.ciudad+" - "+persona2.lugarNacimiento?.pais);