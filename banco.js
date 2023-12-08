const sequelize = require("sequelize");
require('dotenv').config()

const conexao = new sequelize(
    process.env.BD_HOST,
    {dialect:"postgres"}
)

module.exports = { conexao }