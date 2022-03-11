function promedio (arreglo){
let suma = 0;

for (let i=0; i<arreglo.length; i++){
suma = suma + arreglo[i];
};

let promedio = suma / arreglo.length;
return promedio
}

console.log(promedio([1, 2, 3, 4]))
console.log(promedio([7, 8, 9]))
console.log(promedio([300, 100]))