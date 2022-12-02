const { isObjectIdValid } = require("../db/database.helper");

// Apresenta todos os dados dos itens
const findAll = (req, res) => {
  const items = [];
  res.send(items);
};

// Busca os dados por ID
const findById = (req, res) => {
  const id = req.params.id;

  //   Validação de id
  if (!isObjectIdValid(id)) {
    return res.status(404).send({ message: "ID inválido" });
  }
  const item = {};
  //   Validação se o item foi encontrado
  if (!item) {
    return res.status(404).send({ message: "Item não encontrado." });
  }
  res.send(item);
};

// Cria um novo item
const create = (req, res) => {
  const item = req.body;

  if (!item || !item.name || !item.imageUrl || !item.category) {
    return res.status(404).send({ message: "Dados inválidos." });
  }
  const newItem = {};

  res.status(201).send(newItem);
};

// Realiza atualização do item
const update = (req, res) => {
  if (!updateItem) {
    const id = req.params.id;

    if (!isObjectIdValid(id)) {
      return res.status(404).send({ message: "ID inválido" });
    }
    const item = req.body;

    if (!item || !item.name || !item.imageUrl || !item.category) {
      return res.status(404).send({ message: "Dados inválidos." });
    }
  }
  res.send({ message: "Item atualizado com sucesso!" });
};

// Deleta um item especifico
const deleteById = (req, res) => {
  const id = req.params.id;

  if (!isObjectIdValid(id)) {
    return res.status(404).send({ message: "ID inválido" });
  }
  const deletedItem = {};

  if (!deletedItem) {
    return res.status(404).send({ message: "Item não encontrado!" });
  }

  res.send({ message: "Item excluido com sucesso!" });
};

// Todas as funções são exportadas
module.exports = {
  findAll,
  findById,
  create,
  update,
  deleteById,
};
