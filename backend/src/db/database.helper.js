// Importar o mongoose
const mongoose = require("mongoose");

// Nossa URL do banco de dados
const databaseUrl = "mongodb://127.0.0.1:27017/jornada-fullstack-avancado";

// Realizando conexão com o banco, onde utilizaremos o then para caso tenha sucesso na conexão,o sistema exibirar uma mensagem, e o catch caso tenhamos algum erro.
const conncetToDatabase = () => {
  return mongoose
    .connect(databaseUrl)
    .then(() => console.log("Banco de dados conectado com sucesso!"))
    .catch((error) =>
      console.log("Erro na conexão com o banco de dados.\n", error)
    );
};

const isObjectIdValid = (id) => {
  // Função que valida o ID se é valido
  return mongoose.Types.ObjectId.isValid(id);
};
module.exports = {
  isObjectIdValid,
  conncetToDatabase,
};
