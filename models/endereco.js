const { DataTypes, Model, Sequelize } = require('sequelize');
const sequelize = new Sequelize('postgres://root:passwrd@localhost:5432/dse');

class Endereco extends Model {}

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
    tableName: 'Enderecos',
    timestamp:true
    }
);

module.exports = Endereco;