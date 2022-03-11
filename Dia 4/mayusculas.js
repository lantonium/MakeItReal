function capitalizar(texto){
  texto = texto.split('');
  for(i=0;i<texto.length;i++){
   if(texto[i-1]===' ' || i===0){
    texto[i] = texto[i].toUpperCase();
    }
  }
  return texto.join('')
};

console.log(capitalizar("pedro perez")) // "Pedro Perez"
console.log(capitalizar("make it real")) // "Make It Real" 