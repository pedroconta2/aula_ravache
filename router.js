const express = require('express');
const enderecoController = require('./controllers/EnderecoController');

const router = express.Router();


router.post('/enderecos/:cep', enderecoController.createEndereco);
router.get('/enderecos',enderecoController.getAll)
router.post('/enderecos/:id',enderecoController.findById)
router.put('/enderecos/:id',enderecoController.updateEndereco)
router.delete('/enderecos/:id', enderecoController.deleteEndereco)

module.exports = router;