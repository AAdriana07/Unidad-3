// Miniproyecto
//Inicializamos nuestro arreglo con marcas de vehiculos 
let cars = ["bmw", "volvo", "saab", "ford", "fiat", "audi"];

// Métodos de array

//Push
let btnPush = document.getElementById("btn-push");
//Asignamos la funcion al bóton 
btnPush.onclick = funcionPush;

function funcionPush() {
    //Actualizamos el array
    cars.push("lexus");
    mostrarImagenes();
}

//Pop
let btnPop = document.getElementById("btn-pop");
// Asiganamos al la función pop
btnPop.onclick = funcionPop;

function funcionPop() {
    if (cars.length > 0) {
        // Actualizamos el array
        cars.pop();
        mostrarImagenes();
    } else {
        alert("No se puede eliminar más elementos ya que el arreglo está vacío");
    }
}

//Shift
let btnShift = document.getElementById("btn-shift");
//Asignamos la funcion al bóton 
btnShift.onclick = funcionShift;

function funcionShift() {
    if (cars.length > 0) {
        // Actualizamos el array
        cars.shift();
        mostrarImagenes();
    } else {
        alert("No se puede eliminar más elementos ya que el arreglo está vacío");
    }
}

//unshift
let btnUnshift = document.getElementById("btn-unshift");
//Asignamos la funcion al bóton 
btnUnshift.onclick = funcionUnshift;

function funcionUnshift() {
    //Actualizamos el array
    cars.unshift("ferrari");
    mostrarImagenes();
}

//Slice
let btnSlice = document.getElementById("btn-slice");
//Asignamos la funcion al bóton 
btnSlice.onclick = funcionSlice;

function funcionSlice() {
    let begin = document.getElementById("begin").value;
    let end = document.getElementById("end").value;

    //Nos preguntamos si no son strings vacías 
    if (begin != "" && end != "") {
        //Actualizamos el array
        cars = cars.slice(begin, end);
        mostrarImagenes();
    } else {
        alert("Los campos no pueden estar vacíos")
    }

}

//Esta funcion carga las imagenes en el elemento demo
function mostrarImagenes() {
    let text = "";

    for (let car of cars) {
        text += `<img src="./assets/img/${car}.png" alt="${car}" width="100" />`;
    }

    document.getElementById("demo").innerHTML = text;
}


//Mostramos las imagenes al inicio 
mostrarImagenes();