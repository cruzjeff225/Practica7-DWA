var factura = {
    numero: 650,
    cliente : 'RadiantSkin',
    vencimientos: {
        1: new Date(2023,10,20),
        2: new Date(2023, 9, 30),
        3: new Date(2023, 12, 1)
    }
}

var numFactura = factura.numero;
var secondDate = factura.vencimientos[1];

console.log('El segundo vencimiento de la factura ' + numFactura + ' será el ' + secondDate.getDate())