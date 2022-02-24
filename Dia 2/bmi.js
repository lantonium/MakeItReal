const argumentos = process.argv;
const peso = argumentos[2];
const altura = argumentos[3] ;
const cuadradoAltura = altura * altura;
const resultadoBMI = peso / cuadradoAltura;
console.log("Valor del peso ingresado: ", peso);
console.log("Valor de la altura: ", altura);
console.log("Tu BMI es: ", resultadoBMI);