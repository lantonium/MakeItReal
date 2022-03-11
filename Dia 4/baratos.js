function productosBaratos (arreglo){
let productos = [];
for (let i=0; i<arreglo.length; i++){
  if (arreglo[i].precio >= 5 && arreglo[i].precio <=10){
      productos.push(arreglo[i].nombre)
      }
  }

  return productos;
};

let prods = [
  { nombre: "Arroz", precio: 5 },
  { nombre: "Pan", precio: 3 },
  { nombre: "Tomate", precio: 8 },
  { nombre: "Leche", precio: 15 }
];
console.log(productosBaratos(prods));