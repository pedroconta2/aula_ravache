// const Sequelize = require('sequelize');
// const config = require("../config/database");

// const Endereco = require("../models/Endereco");

// const connection = new Sequelize(config);

// Endereco.init(connection);
// Endereco.associate(connection.models);

// module.exports = connection;
const { Sequelize } = require('sequelize');
const config = require('../config/database'); // Arquivo com as configurações do banco

// Configuração do Sequelize para PostgreSQL
const sequelize = new Sequelize(config);

module.exports = sequelize;