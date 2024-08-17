const { Sequelize, Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = new Sequelize('sqlite::memory:')

class Endereco extends Model() {};

Endereco.init({
    Id:{
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    Logradouro : {
        type: DataTypes.STRING,
        allowNull: false
    },
    Numero : {
        type: DataTypes.NUMBER,
        allowNull: true
    },
    Codigo_postal : {
        type: DataTypes.STRING,
        allowNull: false
    },
    Complemento : {
        type: DataTypes.STRING,
        allowNull: true
    }, 
    Bairro :{
        type: DataTypes.STRING,
        allowNull: false
    },
    Cidade: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Estado :{
        type: DataTypes.STRING,
        allowNull: false
    },
    MunicipioIbge: {
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