
/*
// Arrays o arreglos
let nums = [1, 2, 3, 4, 5];

// Mostrar el arreglo 
console.log(nums);

//Tamaño del arreglo
console.log('Tamaño del arreglo');
console.log(nums.length);

//Acceder a los elementos (indexar)
console.log('indexar');
console.log(nums[0]);
console.log(nums[nums.length - 1]);

// Tterar un array
let numsImpares = [1, 3, 5, 7, 9];

console.log("Recorrer el array por indices");
//Bucle para iterar un array 
for (let i = 0; i < numsImpares.length; i++) {
    console.log(numsImpares[i]);
}

console.log("");

console.log("Recorrer el array al revés");
for (let i = numsImpares.length - 1; i >= 0; i--) {
    console.log(numsImpares[i]);
}

console.log("");

console.log("Recorrer el array por elementos");
for (let num of numsImpares) {
    console.log(num);
}



let nums = [];
console.log(nums);
//Arregar elementos
nums[0] = 10;
nums[1] = 20;
nums[2] = 30;
nums[3] = 40;
nums[4] = 50;
console.log(nums);

nums[2] = 8693;
console.log(nums); 

*/

//Arreglos multimensionales
let matriz = [
    [1, 2, 3], 
    [4, 5, 6],
    [7, 8, 9],
];

console.log(matriz);
console.log(matriz.length);
console.log("");

console.log(matriz[0]);
console.log(matriz[1]);
console.log(matriz[2]);

console.log(matriz[0][0]);
console.log(matriz[0][2]);
console.log(matriz[1][1]);
console.log(matriz[2][1]);

console.log("");

//Métodos de arrays 
let nums = [1, 2, 3, 4, 5];
console.log(nums);

//array.push(e) añade el elemento e al final del array
nums.push(6);
nums.push(7);
nums.push("holaa");
console.log(nums);

//array.pop() elimina el último elemento del array y lo retorna
let elementoEliminado = nums.pop();
console.log(nums);
//Mostramos el elemento eliminado que guardamos
console.log(elementoEliminado);
//Eliminamos otros dos elementos 
nums.pop();
nums.pop();
console.log(nums);