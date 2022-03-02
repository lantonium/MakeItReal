const pedro = {
  nombre: "Pedro Perez",
  edad: "30",
  activo: true,
  hobbies: ["programar", "squash", "piano"],
};

console.log(pedro.edad);
pedro.estatura=1.8;
delete pedro.activo;

for (let propiedad in pedro){
    console.log(propiedad+":",pedro[propiedad]);
}

