const argumentos = process.argv;
const dividendo = argumentos[2];
const divisor = argumentos[3];

const resultado = division(dividendo, divisor);
console.log("el resultado es: ", resultado);

function division(n1, n2){
  let resultado;
  if (n2 == 0){
    resultado = "ERROR: El divisor debe ser diferente de cero";
  } else {
    resultado = n1/n2;
  }
  return resultado;
};