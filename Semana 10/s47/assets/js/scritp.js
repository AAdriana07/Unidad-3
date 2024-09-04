// Objetos literales 
const persona = {
    nombre: 'Juan',
    apellidos: 'Díaz',
    edad: 25,
    dni_cedula: "12345678",
};

//Mostramos el objecto 
console.log(persona);

//ACCEDER O MODIFICAR UN OBJECTO
// objecto.clave = valor;
// objecto["clave"] = valor;

//ACCEDEMOS A UNA PROPIEDAD
console.log(persona.nombre);
console.log(persona["nombre"]);
console.log(persona.dni_cedula);
console.log(persona["dni_cedula"]);

//AGREGAR PROPIEDADES
persona.correo = 'micorreo@gmail.com'
console.log(persona);

persona.correo = "alexia@gmail.com"
console.log(persona);

persona.hobbie = "tocar piano"
console.log(persona);