const argumentos = process.argv;
const original = argumentos[2];
const descuento = 0.24;
const resultadoDescuento = original * descuento;
const resultadoMenosDescuento = original - resultadoDescuento;
console.log("Valor del artículo ingresado por el usuario: ", original);
console.log("Valor del artículo: ", original);
console.log("Valor del descuento: ", resultadoDescuento + " equivale al " + descuento * 100 + "%" );
console.log("Valor final del artículo al restar el valor del descuento: ", resultadoMenosDescuento);