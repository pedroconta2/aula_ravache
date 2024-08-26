const Endereco = require('../models/endereco');
const axios = require('axios');

exports.createEndereco = async (req, res) => {
    const cep = req.params.cep;
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json`)
    const data = response.data;

    const endereco = await Endereco.create({
        Logradouro: data.logradouro,
        Codigo_postal: data.cep,
        Numero : 0,
        Bairro: data.bairro,
        Complemento : "",
        Cidade: data.localidade,
        Estado: data.uf,
        MunicipioIbge: data.ibge
    })
    console.log(endereco)
    try {

        res.status(201).json(endereco);
    } catch (error) {
        res.status(500).json({ message: error });
    }
  };