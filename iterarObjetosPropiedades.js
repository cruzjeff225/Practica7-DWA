//Objeto con multiples propiedades
const producto = {
    nombre: "Laptop",
    precio: 1000,
    disponible: true
};
//Usando un bucle para iterar sobre la propiedad del objeto
for (let propiedad in producto){
    console.log(`${propiedad}: ${producto[propiedad]}`);
}