var express = require('express');
var router = express.Router();
var facturasantiguasController = require('../controllers/facturasantiguasController.js');

/*
 * GET
 */
router.get('/', facturasantiguasController.list);

router.get('/cliente/:id', facturasantiguasController.listFacturasAntiguasCliente)
/*
 * GET
 */
router.get('/:id', facturasantiguasController.show);

/*
 * POST
 */
router.post('/', facturasantiguasController.create);

/*
 * PUT
 */
router.put('/:id', facturasantiguasController.update);

/*
 * DELETE
 */
router.delete('/:id', facturasantiguasController.remove);

module.exports = router;
