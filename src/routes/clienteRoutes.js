console.log('RUTAS CLIENTES ACTIVAS');

const express = require('express');
const router = express.Router();

const clienteController = require('../controllers/clienteController');

console.log('Rutas de clientes cargadas');

router.post('/', clienteController.crearCliente);

module.exports = router;