const Sequelize = require("sequelize");

const connection = new Sequelize('perguntas', 'root', '20314167',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;