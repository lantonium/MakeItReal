const argumentos = process.argv;
const horasIngresadas = argumentos[2];
const horasValor = argumentos[3];

console.log("Total Horas: ", horasIngresadas);
console.log("Total Horas: ", horasValor);

if(horasIngresadas > 40){
  const valorOrdinario = 40 * horasValor;
  console.log("Total Ordinario : " + valorOrdinario);
  const horasExtra = horasIngresadas - 40
  console.log("Horas Extra : " + horasExtra);
  const VlrRecargo = horasValor * 1.5;
  console.log("Recargo por horas extra : " + VlrRecargo);
  const TotalVlrRecargo = horasExtra * VlrRecargo;
  console.log("Total recargo por horas extra : $" + TotalVlrRecargo);
  const TotalDevengado = valorOrdinario + TotalVlrRecargo;
  console.log("Total devengado : $" + TotalDevengado);
} 