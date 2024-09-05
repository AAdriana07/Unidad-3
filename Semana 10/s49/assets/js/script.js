$(document).ready(function (){
    //Acá colocaremos nuestro código
    //Sintaxis de jQuery -> $(selector).acción()
    // con Js
    document.querySelector("#title").innerHTML = "DON con js";
    //Con jQuery
    $('#title').html("DON con jQuery");

    //Seleccionar por clase
    $('.demo').html("Clase selecionada");
    //Solo usar el primero de una clase
    $('.demo').first().html("Primer elemento de la clase");

    //Seleccionar elemento y cambiar un atributo 
    // .attr("atributo", "valor")
    $("img").attr(
        "src", 
        "https://cdn.britannica.com/26/162626-050-3534626F/Koala.jpg"
    );

    $("img").attr("title", "Un koala");

    //Evento de click
    $("#btn").click(function () {
        $("#resultado").toggle();
    });
});