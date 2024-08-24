const Endereco = require('../models/endereco');
const axios = require('axios');

exports.createEndereco = async (req, res) => {
    const { cep } = req.params.cep;
    try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json`)
        const data = response.data;

        const endereco = await Endereco.create({
            logradouro: data.logradouro,
            codigo_postal: data.cep,
            bairro: data.bairro,
            cidade: data.cidade,
            estado: data.estado,
            municipioibge: data.ibge
        })

        res.status(201).json(endereco);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
  };