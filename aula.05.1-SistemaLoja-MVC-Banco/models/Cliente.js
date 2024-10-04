// ORM - Sequelize
import Sequelize from "sequelize";
import connection from "../config/sequelize-config.js";

// .define cria tabela no banco
const Cliente = connection.define("clientes", {
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  cpf: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  endereco: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});
// Não força a criação da tabela caso já exista
Cliente.sync({ force: false });
export default Cliente;
