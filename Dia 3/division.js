const argumentos = process.argv;
const divisor = argumentos[2];
const dividendo = argumentos[3];

if(divisor > 0 && dividendo != 0){
  const resto = divisor / dividendo;
  console.log("Resultado: " + resto);
} else {
  console.log("ERROR: Dividendo debe ser diferente de cero");
}