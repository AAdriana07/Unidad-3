let letras = ["a", "b", "c", "a", "d", "e", "f", "a", "g", "h"];

// .indexOf(elemento, desde)
// devuelve un indice de la primera ocurrencia de un elemento en un arreglo, desde una posicion determinada
//busca desde el inicio
let indice = letras.indexOf("a");
console.log(indice);
console.log(letras.indexOf("d"));

//Busca desde el indice espicificado 
console.log(letras.indexOf("a", 4));

// buscamos un elemento que no existe (nos retorna -1)
console.log(letras.indexOf("x")); 

// .lastIndexOf(elemento, desde)
// Debuelve el indice de la ultima ocurrencia de un elemento en un arreglo, desde una posicion determinada
console.log("lastIndexOf");

console.log(letras.lastIndexOf("a"));
// busca desde el indice especificado
console.log(letras.lastIndexOf("a", 1)); 

// .includes(elemento, desde)
// determina si un arreglo incluye un determinado elemento, devolviendo true o false 
console.log("includes");
console.log(letras.includes("c"));
console.log(letras.includes("c", 3));

// .find() -> devuelve el propio elemento(el primero)
let nums = [34, 65, 23, 45, 96, 143, 4, 56];
let coincidencia = nums.find(num => num > 80);

// .findIndex() -> devuelve el indice del propio elemento(el primero)
let coincidenciaIndex = nums.findIndex(num => num > 80);

// .filter() -> devuelve un arreglo con todos los elemtos que cumplan la condicion
let filtrado = nums.filter(num => num > 80);

console.log(coincidencia);
console.log(coincidenciaIndex);
console.log(filtrado);
