const argumentos = process.argv;
const datosUsuarioAdmin = ["admin", "admin123"];

const usuario = argumentos[2];
const clave = argumentos[3];

if(usuario === datosUsuarioAdmin[0] && clave === datosUsuarioAdmin[1]){
  console.log("Éxito: Acceso permitido");
} else {
  console.log("ERROR: Acceso denegado");
}