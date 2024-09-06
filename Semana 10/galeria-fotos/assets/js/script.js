// Consumo de API con jQuery

// Obtener urls con id aleatorio 
function generateUrl() {
    let id = Math.round(Math.random() * 500) + 1;
    return `https://picsum.photos/id/${id}/info`;
}

//Funcion para consumir la API
function getPicture() {
    $.ajax({
        type: "GET",
        url: generateUrl(),
        dataType: "json",
        async: true,
        success: function (data) {
          renderPicture(data);
        },
      });
}

//Funcion para renderizar la imagen
function renderPicture(data) {
    //Probamos algunos datos
    console.log(data);
    console.log(data.author);

    //Creo mi card manipulando el DOM con jQuery
    //CCreamos un div
    let div = $("<div></div>").addClass("card");

    //Creamos una imagen y agregamos su src
    let img = $("<img />").attr("src", data.download_url).addClass("card-img");
    //Agragamos la imagen al div
    div.append(img);

    //Creamos un h3 y agregamos el autor
    let autor = $(`<h3>${data.author}</h3>`).addClass("card-title");
    //Agragamos la h3 al div
    div.append(autor);

    //Agregamos el contenido al pictures container
    $("#pictures-container").append(div);
}

$(document).ready(function() {
    for (let i = 0; i < 10; i++) {
        getPicture()
    }
});