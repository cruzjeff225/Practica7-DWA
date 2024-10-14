//Definiendo el objeto que incluye metodos para realizar acciones
const coche = {
    marca: "Toyota",
    modelo: "Corolla",
    encender : function() {
        console.log("El coche está encendido");
    },
    apagar: function(){
        console.log("El coche está apagado");
    }
};

//Usando los metodos del objeto
coche.encender();
coche.apagar();