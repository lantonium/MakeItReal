function palindrome(texto) {
  const nuevoTexto = texto.replace(/[\W_]/g, "").toLowerCase();
  const textoReves = nuevoTexto.split("").reverse().join("");
  return nuevoTexto === textoReves ? true : false;
}

console.log(palindrome("Atar a la rata"));
console.log(palindrome("vamos makers!"));


