/*
HolaMundo
A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z
HOLAMUNDO
GNKZLTMCN -> Parte1: encriptar
HOLAMUNDO -> Parte2: desencriptar
 */
const argumentos = process.argv;
const mensaje = argumentos[2];
const mensajeMayuculas = mensaje.toUpperCase();
const mensajeEncriptado = encriptar(mensajeMayuculas);
const mensajeDesencriptado = desencriptar(mensajeEncriptado);
console.log("El mensaje encriptado es: "+mensajeEncriptado);
console.log("El mensaje desencriptado es: "+mensajeDesencriptado);

function encriptar(texto){
  const abecedario = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  let respuesta = "";
  for(let i = 0; i < texto.length; i++){
    let posicion = abecedario.indexOf(texto[i]);

    respuesta = posicion === 0 ? respuesta + "Z" : respuesta + abecedario[posicion - 1];
  }
  return respuesta;
}

function desencriptar(texto){
  const abecedario = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  let respuesta = "";
  //dejar aquí su código
  return respuesta;
}