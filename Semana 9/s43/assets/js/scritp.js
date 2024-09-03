/*
// Modificacion de arrays
// .map(funcion)
// Crea un nuevo array con los resultados de la llamada a la funcion indicada aplicada a cada uno de sus elementos

// Crear un nuevo arrays multiplicado por dos
let nums = [1, 2, 3, 4, 5];
console.log(nums);

let numsPorDos = nums.map(n => n * 2);
console.log(numsPorDos); // el arreglo original no se modifica

// Crear un nuevo array con cada elemento elevado al cuadrado
let numsAlCuadrado = nums.map(n => n * n);
console.log(numsAlCuadrado);

// crear un array indicando que elementos estan en mayuscula (true) y cuales en minuscula (false)
let letras = ["a", "B", "c", "D", "e"];

let sonMayusculas = letras.map((c) => c.toUpperCase() == c);
console.log(sonMayusculas);

// 3 -> Del arreglo de strings, crear un nuevo arreglo con la siguiente pauta: Si la palabra tiene más de 7 letras se pondrá "palabra larga", en caso contrario se pondrá "palabra corta"
let palabras = [
    "hola",
    "computadora",
    "casa",
    "programacion",
    "javascript",
    "ciclo",
  ];
  // ["palabra corta", "palabra larga", "palabra corta", "palabra larga", "palabra larga", "palabra corta"]

let palabrasSize = palabras.map((palabra) => {
    if (palabra.length > 7) {
        return "palabra larga"
    } else {
        return "palabra corta"
    }
});

console.log(palabrasSize);
*/

// .reduce() metodo acomulador y a cada valor de un array para reducirlo a un único valor

// Sumar el siguiente arrays
const nums = [1, 2, 3, 4, 5];

let suma = nums.reduce((a, b) => a + b, 0); // 0 -> donde empieza 
console.log(suma);

let multiplicacion = nums.reduce((a, b) => a * b, 1);
console.log(multiplicacion);

// sort(funcionComparacion) => ordena los elementos de un arreglo y lo devuelve segun Unicode

let puntos = [11, 2, 1, 21, 23, 10];

// Ordeno el arreglo por defecto
console.log("ordenamiento por defecto");
puntos.sort();
console.log(puntos);
// Ordeno el arreglo por defecto 
console.log("ordenamiento estricto");
puntos.sort((a, b) => a - b);
console.log(puntos);

// .reverse()
console.log("reverse");
const arr = ["hola", "a", 5, 90.8];
console.log(arr);

// Revertimos el arreglo
arr.reverse();
console.log(arr);

// split()
// divide un objecto de tipo string en un array de cadenas mediante la separacion de la cadena en subcadenas

console.log("split");

//Creamos el array usando el espacio como separador
const frase = "Hola hoy es un día hermoso";
console.log(frase);

let palabras = frase.split(" ");
console.log(palabras);

// Creamos el array usando el espacio como separador 
const csv = "Perú,Argentina,Chile,Japón"
console.log(csv);

let paises = csv.split(",");
console.log(paises);

// join()
// el método une todos los elementos de un array en una cadena y devuelve esta cadena
console.log("join");
let strPalabras = palabras.join(" ");
console.log(strPalabras);

let strPaises = paises.join();

console.log(strPaises);

