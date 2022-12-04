const { isObjectIdValid } = require("../db/database.helper");

// Apresenta todos os dados dos itens
const readAll = (req, res) => {
  const category = [];
  res.send(category);
};
// Cria um novo item
const create = (req, res) => {
  const category = req.body;

  if (!category || !category.name) {
    return res.status(404).send({ message: "Dados inválidos." });
  }
  const newCategory = {};

  res.status(201).send(newCategory);
};

// Todas as funções são exportadas
module.exports = {
  readAll,
  create,
};
