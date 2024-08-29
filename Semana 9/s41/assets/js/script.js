/*
// Métodos de arrays

let nums = [1, 2, 3, 4, 5];

console.log(nums);

// arr.push(x) -> agrega el valor x al final del array
nums.push(6);
console.log(nums);
nums.push("hola333");
console.log(nums);

// arr.pop() -> elimina el último elemento del array
nums.pop();
console.log(nums);
nums.pop();
console.log(nums);

// arr.unshif(x) -> agrega el valor x al inicio del array
console.log('unshif')
nums.unshift(0);
console.log(nums);

// arr.shif() -> elimina el primer valor del arrays
console.log('shif')
nums.shift();
console.log(nums);

// arr.slice(begin, end) 
//Crea una copia del array desde el indice de inicio al fin, sin tomar el ultimo (no modifica el original, solo lo retorna)
console.log("slice");
let subnums1 = nums.slice(0, 3);
console.log(subnums1);
console.log(nums);

// Ejercicio 
//Crear el subarray [3, 4, 5, 6] a partir nums
let subarray = nums.slice(2, 6);
console.log("Subarray");
console.log(subarray);
*/



// arr.slpice(start, deleteCount, item1, item2, ...)
//Valor de inicio

let nums = [1, 2, 3, 4, 5, 6, 7];
console.log(nums);

//Valor de inicio 
console.log("Solo valor de inicio")
let subarr1 = nums.splice(2);
console.log(subarr1);
// El array original se ve modificado (lo que sobra del subarray)
console.log(nums);

//reasigno el array
console.log("reasignamos el array");
nums [1, 2, 3, 4, 5, 6, 7];
console.log(nums);

//Ahora eliminando elementos 
console.log("eliminando elementos");
//Se queda con dos elementos del subarray
let subarr2 = nums.splice(2, 2);
console.log(subarr2);
console.log(nums);

//reasigno el array
console.log("reasignamos el array");
nums [1, 2, 3, 4, 5, 6, 7];
console.log(nums);

//Ahora eliminando elementos 
console.log("agregando elementos");
//Agrega elementos 
let subarr3 = nums.splice(2, 4, "a", "b", true, 123, "hola");
console.log(subarr3);
console.log(nums);



