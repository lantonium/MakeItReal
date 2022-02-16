console.log(10); 
console.log(true);
console.log(false);
console.log("Hola mundo!"); 
console.log('Hola mundo!');

console.log(typeof 10);
console.log(typeof true); 
console.log(typeof false);
console.log(typeof "Hola mundo!");
console.log(typeof 'Hola mundo!');

/*
Operadores aritméticos:
+
-
*
/
*/
console.log(10 + 5* (2-3)); // expresión aritmética

/*
Operadores relacionales:
>
<
>=
<=
==
===
*/
console.log("Operadores relacionales:");
console.log(10 > 5); // true
console.log(2 == 2); // true ==
console.log(3 < -1); // false 
console.log(10 + 5 * (23) > 5); // ?

/*
conjunción
    true y true = true
    true y false = false
    false y true = false
    false y false = false
disyunción
    true o true = true
    true o false = true
    false o true = true
    false o false = false
*/
console.log("conjunción y disyunción:"); 
console.log(true && true);
console.log(true || false);
console.log((10 + 5 * (2 - 3)>5) && (10 > 2));

console.log("1: ", 2 == 2); //true 
console.log("2: ", 2 == "2");
console.log("3: ", 2 === "2");