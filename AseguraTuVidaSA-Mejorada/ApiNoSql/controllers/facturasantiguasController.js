var FacturasantiguasModel = require('../models/facturasantiguasModel.js');

/**
 * facturasantiguasController.js
 *
 * @description :: Server-side logic for managing facturasantiguass.
 */
module.exports = {

    /**
     * facturasantiguasController.list()
     */
    list: function (req, res) {
        FacturasantiguasModel.find(function (err, facturasantiguass) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting facturasantiguas.',
                    error: err
                });
            }

            return res.json(facturasantiguass);
        });
    },

    listFacturasAntiguasCliente: function (req, res) {
        var idCliente = req.params.id;
        console.log(idCliente);
        FacturasantiguasModel.findAll({ idCliente: idCliente }, function (err, facturasantiguas) {
            if(err) {
                return res.status(500).json({
                    message: `Error when getting facturasantiguas with id cliente ${idCliente}`,
                    error: err
                });
            }

            if(!facturasantiguas) {
                return res.status(404).json({
                    message: `No such facturas antiguas with id cliente ${idCliente}`
                })
            }

            return res.json(facturasantiguas);
        })
    },

    /**
     * facturasantiguasController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        FacturasantiguasModel.findOne({ _id: id }, function (err, facturasantiguas) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting facturasantiguas.',
                    error: err
                });
            }

            if (!facturasantiguas) {
                return res.status(404).json({
                    message: 'No such facturasantiguas'
                });
            }

            return res.json(facturasantiguas);
        });
    },

    /**
     * facturasantiguasController.create()
     */
    create: function (req, res) {
        var facturasantiguas = new FacturasantiguasModel({
            idcliente: req.body.idcliente,
            idFactura: req.body.idFactura,
            fechaFactura: req.body.fechaFactura,
            idProducto: req.body.idProducto,
            codProducto: req.body.codProducto,
            cantidad: req.body.cantidad,
            precioUnitario: req.body.precioUnitario,
            precioParcial: req.body.precioParcial
        });

        facturasantiguas.save(function (err, facturasantiguas) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating facturasantiguas',
                    error: err
                });
            }

            return res.status(201).json(facturasantiguas);
        });
    },

    /**
     * facturasantiguasController.update()
     */
    update: function (req, res) {
        var id = req.params.id;

        FacturasantiguasModel.findOne({ _id: id }, function (err, facturasantiguas) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting facturasantiguas',
                    error: err
                });
            }

            if (!facturasantiguas) {
                return res.status(404).json({
                    message: 'No such facturasantiguas'
                });
            }

            facturasantiguas.idcliente = req.body.idcliente ? req.body.idcliente : facturasantiguas.idcliente;
            facturasantiguas.idFactura = req.body.idFactura ? req.body.idFactura : facturasantiguas.idFactura;
            facturasantiguas.fechaFactura = req.body.fechaFactura ? req.body.fechaFactura : facturasantiguas.fechaFactura;
            facturasantiguas.idProducto = req.body.idProducto ? req.body.idProducto : facturasantiguas.idProducto;
            facturasantiguas.codProducto = req.body.codProducto ? req.body.codProducto : facturasantiguas.codProducto;
            facturasantiguas.cantidad = req.body.cantidad ? req.body.cantidad : facturasantiguas.cantidad;
            facturasantiguas.precioUnitario = req.body.precioUnitario ? req.body.precioUnitario : facturasantiguas.precioUnitario;
            facturasantiguas.precioParcial = req.body.precioParcial ? req.body.precioParcial : facturasantiguas.precioParcial;

            facturasantiguas.save(function (err, facturasantiguas) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating facturasantiguas.',
                        error: err
                    });
                }

                return res.json(facturasantiguas);
            });
        });
    },

    /**
     * facturasantiguasController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;

        FacturasantiguasModel.findByIdAndRemove(id, function (err, facturasantiguas) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the facturasantiguas.',
                    error: err
                });
            }

            return res.status(204).json();
        });
    }
};
