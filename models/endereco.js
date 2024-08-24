const { DataTypes, Model, Sequelize } = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/apinode');

class Endereco extends Model {};

Endereco.init({
    id:{
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    logradouro : {
        type: DataTypes.STRING,
        allowNull: false
    },
    numero : {
        type: DataTypes.NUMBER,
        allowNull: true
    },
    codigo_postal : {
        type: DataTypes.STRING,
        allowNull: false
    },
    complemento : {
        type: DataTypes.STRING,
        allowNull: true
    }, 
    bairro :{
        type: DataTypes.STRING,
        allowNull: false
    },
    cidade: {
        type: DataTypes.STRING,
        allowNull: false
    },
    estado :{
        type: DataTypes.STRING,
        allowNull: false
    },
    municipioIbge: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Endereco',
    tableName: 'enderecos',
    timestamp:true
    }
);

module.exports = Endereco;