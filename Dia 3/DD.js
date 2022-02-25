const argumentos = process.argv;
const sexo = argumentos[2];
let respuesta;

switch(sexo) {
  case "F":
    respuesta = "Es femenino";
  break;
  case "M":
    respuesta = "Es masculino";
  break;
  default:
    respuesta = "No definido";
  break;
}
console.log("La respuesta es: ", respuesta);