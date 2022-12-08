const { isObjectIdValid } = require("../db/database.helper");

// Apresenta todas as categorias
const readAll = (req, res) => {
  const category = [];
  res.send(category);
};
// Cria um novo Catergoria
const create = (req, res) => {
  const category = req.body;

  if (!category || !category.name) {
    return res
      .status(404)
      .send({ message: "Dados inválidos. Favor verificar novamente!" });
  }
  const newCategory = {};

  res.status(201).send(newCategory);
};

// Todas as funções são exportadas
module.exports = {
  readAll,
  create,
};
