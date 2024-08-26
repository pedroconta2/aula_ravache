'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('Enderecos', {
    Id:{
        type: Sequelize.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    Logradouro : {
        type: Sequelize.STRING,
        allowNull: false
    },
    Numero : {
        type: Sequelize.NUMBER,
        allowNull: true
    },
    Codigo_postal : {
        type: Sequelize.STRING,
        allowNull: false
    },
    Complemento : {
        type: Sequelize.STRING,
        allowNull: true
    }, 
    Bairro :{
        type: Sequelize.STRING,
        allowNull: false
    },
    Cidade: {
        type: Sequelize.STRING,
        allowNull: false
    },
    Estado :{
        type: Sequelize.STRING,
        allowNull: false
    },
    MunicipioIbge: {
        type: Sequelize.STRING,
        allowNull: false
    }});
     
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Enderecos');

  }
};
