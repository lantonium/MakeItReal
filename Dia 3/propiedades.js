// eliminar propiedades
const carro = {
  marca: "Audi",
  modelo: 2022
}
console.log("carro", carro);
delete carro.modelo;
console.log("carro", carro);
carro.marca = "Nissan";
console.log("carro", carro);
carro.color = "Blanco";
console.log("carro", carro);