const familia = {
    padres: [
        {
            nombre: 'Josefa',
            apellido: 'Pongo',
            edad: 45,
            hobbie: 'bailar',
        },
        {
            nombre: 'Luis',
            apellido: 'Villenet',
            edad: 55,
            hobbie: 'cocinar',
        },
    ],

    abuelos: {
        maternos: [
            {
                nombre: 'Bacilia',
                apellido: 'Facundo',
                edad: 65,
                hobbie: 'cocinar',
            },
            {
                nombre: 'Josue',
                apellido: 'Facundo',
                edad: 67,
                hobbie: 'jugar futbol',
            },
        ],
        paternos: [
            {
                nombre: 'Rosa',
                apellido: 'Villanueva',
                edad: 60,
                hobbie: 'cocinar',
            },
            {
                nombre: 'Juan',
                apellido: 'Vazques',
                edad: 77,
                hobbie: 'ver películas',
            },
        ],
    },
};

console.log(familia);
//Aceder 
console.log(familia.padres[0].nombre);
console.log(familia.padres[0]["apellido"]);
console.log(familia.padres[1].hobbie);
console.log(familia.padres[0]["nombre"]);
//Modificar 
familia.padres[1].nombre = "Carlos";
familia.abuelos.maternos[1].hobbie = "Bailar";
