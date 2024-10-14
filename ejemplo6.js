var factura = {
    numero: 301,
    cliente: 'RadiantSkin',
    divisa: 'Dolares - USD',
    total: 800,
    IVA: 100
}

var numFactura = factura.numero;
var monedaFactura = factura.divisa;
var totalFactura = factura.total;
console.log('La factura ' + numFactura + ' es de ' + totalFactura + ' ' + monedaFactura)