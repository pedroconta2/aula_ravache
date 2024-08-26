const Endereco = require('../models/endereco');
const axios = require('axios');

exports.createEndereco = async (req, res) => {

    try {
        const cep = req.params.cep;
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json`)
        const data = response.data;

        const endereco = await Endereco.create({
            Logradouro: data.logradouro,
            Codigo_postal: data.cep,
            Numero: 0,
            Bairro: data.bairro,
            Complemento: "",
            Cidade: data.localidade,
            Estado: data.uf,
            MunicipioIbge: data.ibge
        })
        res.status(201).json(endereco);
    } catch (error) {
        res.status(500).json({message: error});
    }
};

exports.getAll = async (req, res) => {
    try {
        const enderecos = await Endereco.findAll()
        res.status(201).json(enderecos);
    } catch (error) {
        res.status(500).json({message: error});
    }
};

exports.findById = async (req, res) => {
    const id = req.params.id;
    try {
        const endereco = await Endereco.findByPk(id);
        res.status(201).json(endereco);
    } catch (error) {
        res.status(500).json({message: error})
    }
}

exports.updateEndereco = async (req, res) => {

    try {
        const id = req.params.id
        const cep = req.body.cep;
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json`)
        const data = response.data;
        const enderecoToUpdate = await Endereco.findByPk(id)


        enderecoToUpdate.Logradouro = data.logradouro;
        enderecoToUpdate.Codigo_postal = data.cep;
        enderecoToUpdate.Numero = 0;
        enderecoToUpdate.Bairro = data.bairro;
        enderecoToUpdate.Complemento = "";
        enderecoToUpdate.Cidade = data.localidade;
        enderecoToUpdate.Estado = data.uf;
        enderecoToUpdate.MunicipioIbge = data.ibge;

        await enderecoToUpdate.save();

        res.status(201).json(enderecoToUpdate);
    } catch (error) {
        res.status(500).json({message: error});
    }
};

exports.deleteEndereco = async (req,res) => {
    try{
        const id = req.params.id;
        const endereco = await Endereco.findByPk(id);

        await endereco.destroy(id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({message: error});
    }
}