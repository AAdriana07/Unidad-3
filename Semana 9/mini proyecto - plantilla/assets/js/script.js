// Miniproyecto
//Inicializamos nuestro arreglo con marcas de vehiculos 
const cars = ["bmw", "volvo", "saab", "ford", "fiat", "audi"];

// Métodos de array
let btnPush = document.getElementById("btn-push");
//Asignamos la funcion al bóton 
btnPush.onclick = funcionPush;

function funcionPush() {
    //Actualizamos el array
    cars.push("lexus");
    mostrarImagenes();
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