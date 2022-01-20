var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var facturasantiguasSchema = new Schema({
	'idcliente' : String,
	'idFactura' : String,
	'fechaFactura' : String,
	'idProducto' : String,
	'codProducto' : String,
	'cantidad' : String,
	'precioUnitario' : String,
	'precioParcial' : String
});

module.exports = mongoose.model('facturasantiguas', facturasantiguasSchema);
