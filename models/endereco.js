const { Sequelize, Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = new Sequelize('sqlite::memory:')

class Endereco extends Model() {};

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
    modelName: 'Endereco'
    }
);