const service = require("./item.service");
const { isObjectIdValid } = require("../db/database.helper");

// Apresenta todos os dados dos itens
const findAll = async (req, res) => {
  const items = await service.findAll();
  res.send(items);
};

// Busca os dados por ID
const findById = async (req, res) => {
  const id = req.params.id;

  //   Validação de id
  if (!isObjectIdValid(id)) {
    return res.status(404).send({ message: "ID inválido" });
  }
  const item = await service.findAll();
  //   Validação se o item foi encontrado
  if (!item) {
    return res.status(404).send({ message: "Item não encontrado." });
  }
  res.send(item);
};

// Cria um novo item
const create = async (req, res) => {
  const item = req.body;

  if (!item || !item.name || !item.imageUrl || !item.category) {
    return res.status(404).send({ message: "Dados inválidos." });
  }
  const newItem = await service.create(item);

  res.status(201).send(newItem);
};

// Realiza atualização do item
const update = async (req, res) => {
  const id = req.params.id;

  if (!isObjectIdValid(id)) {
    return res.status(400).send({ message: "ID inválido!" });
  }

  const item = req.body;

  if (!item || !item.name || !item.imageUrl || !item.category) {
    return res.status(400).send({ message: "Dados inválidos!" });
  }
  // Fazemos a referencia ao service, para trazer os dados do BD
  const updatedItem = await service.update(id, item);

  if (!updatedItem) {
    return res.send(404).send({ message: "Item não encontrado!" });
  }

  res.send({ message: "Item atualizado com sucesso!" });
};

// Deleta um item especifico
const deleteById = async (req, res) => {
  const id = req.params.id;

  if (!isObjectIdValid(id)) {
    return res.status(404).send({ message: "ID inválido" });
  }
  const deletedItem = await service.deleteById(id);

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
