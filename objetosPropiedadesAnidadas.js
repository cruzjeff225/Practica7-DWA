//Definiendo el objeto que contiene otros objetos como propiedades
const estudiante = {
    nombre: "Jefferson",
    edad: 21,
    direccion: {
        calle: "Calle Principal",
        ciudad: "Santiago de María",
        departamento: "Usulután"
    },
    materias:["Programación", "Base de Datos", "Redes"]
};

//Accediendo a las propiedades anidadas
console.log(estudiante.direccion.ciudad);
console.log(estudiante.materias[1]);