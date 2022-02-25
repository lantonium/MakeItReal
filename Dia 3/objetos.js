/*const miObjeto = {
  atributo1: "valor",
  atributo2: 1,
  atributo3: true,
  atributo4: [22],
  atributo5: {
    subatributo51: "soy el subatributo" 
  }
};
console.log("miObjeto.atributo1", miObjeto.atributo1);
console.log("miObjeto.atributo2", miObjeto.atributo2);
console.log("miObjeto.atributo3", miObjeto.atributo3);
console.log("miObjeto.atributo4", miObjeto.atributo4);
console.log("miObjeto.atributo5.atributo51", miObjeto.atributo5.subatributo51);
*/

//objetos individuales
const persona1 = {
  nombre: "Juana",
  apellido: "Perez",
  fechaNacimiento: "12/12/1990",
  telefonos: ["3001234567", "31234567"],
  nacionalidad: ["CO"],
  idiomas: ["ES", "EN", "IT"]
};

const persona2 = {
  nombre: "Marco",
  apellido: "Ramirez",
  fechaNacimiento: "12/12/1991",
  telefonos: ["3001234567", "31234567"],
  nacionalidad: ["CO"],
  idiomas: ["ES", "EN", "IT"]
};
console.log("La persona1 se llama: "+persona1.nombre+" "+persona1.apellido);
console.log("Su nacionalidad es: "+persona1.nacionalidad[0]);

console.log("La persona2 se llama: "+persona2["nombre"]+" "+persona2["apellido"]);
console.log("Su nacionalidad es: "+persona2["nacionalidad"][0]);

// arreglos de objetos
//const personas = [persona1, persona2];
const personas = [];
personas.push(persona1);
personas.push(persona2);

console.log("Ciclos");
for (let llave in persona1){
  console.log(persona1[llave]);
}
console.log("***************************");
console.log("***************************");
console.log("***************************");
console.log("Ciclos en personas");
for (let indice = 0; indice < personas.length; indice++){
  console.log("Información de persona: "+ indice);
  for (let llave in personas[indice]){
    console.log(personas[indice][llave]);
  }
}
