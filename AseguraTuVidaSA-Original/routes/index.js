var express = require('express');
var router = express.Router();
const Sequelize  = require('sequelize');
const Producto = require('../models').producto;
const Cliente = require('../models').cliente;
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Dashboard' });
});

router.get('/productos', function(req, res, next) {
  Producto.findAll({
    attributes: { exclude: ["updateAt"]}
  })
  .then(productos => {
    res.render('productos', {title: 'My Dashboard :: Productos', productos: productos });
  })
  .catch(error => error.status(400).send(error))
});

router.get('/cliente', (req,res,next) => {
  Cliente.findAll({
    attributes: {exlude: ["updateAt"]}
  })
    .then(clientes => {
      res.render('clientes', {title: 'My Dashboard :: Clientes', clientes: clientes});
    })
    .catch(error => error.status(400).send(error))
})

module.exports = router;
