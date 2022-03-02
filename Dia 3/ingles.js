let personasIngles = [];
const personas = [{ 
        nombre: "Juana",
        sexo: "F",
        edad: 30,
        idiomas: ["EN","ES"]
},{
        nombre: "Mario",
        sexo: "M",
        edad: 20,
        idiomas: ["ES"]
},{
        nombre: "Carla",
        sexo: "F",
        edad: 31,
        idiomas: ["EN"]
},{
        nombre: "Luis",
        sexo: "F",
        edad: 19,
        idiomas: ["EN"]
},{
        nombre: "Paula",
        sexo: "M",
        edad: 21,
        idiomas: ["ES"]
}
];

for (let i = 0; i < personas.length; i++){
    for (let j = 0; j <= personas[i].idiomas.length; j++){
        if(personas[i]["idiomas"][j] == "EN"){
           personasIngles.push(personas[i]["nombre"]);
        }
    }
}

console.log(personasIngles.toString());