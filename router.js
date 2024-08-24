const express = require('express');
const enderecoController = require('./controllers/EnderecoController');

const router = express.Router();


router.post('/enderecos/:cep', enderecoController.createEndereco);

module.exports = router;