const { isObjectIdValid } = require("../db/database.helper");
const service = require("./category.service");
// Apresenta todas as categorias
const readAll = (req, res) => {
  const category = [];
  res.send(category);
};
// Busca uma categoria pelo ID
const findById = async (req, res) => {
  const id = req.params.id;

  //   Validação de id
  if (!isObjectIdValid(id)) {
    return res.status(404).send({ message: "ID inválido" });
  }
  const categoria = await service.findAll();
  //   Validação se o item foi encontrado
  if (!categoria) {
    return res.status(404).send({ message: "Categoria não encontrado." });
  }
  res.send(categoria);
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

// Atualiza uma categoria
const update = async (req, res) => {
  const id = req.params.id;

  if (!isObjectIdValid(id)) {
    return res.status(400).send({ message: "ID inválido!" });
  }
  const categoria = req.body;

  if (!categoria || !categoria.name) {
    return res.status(400).send({ message: "Dados inválidos!" });
  }
  const updateCategory = await service.update(id, categoria);

  if (!updateCategory) {
    return res.send(404).send({ message: "Categorianão econtrada!" });
  }
  res.send({ message: "Categoria atualizada com sucesso." });
};

// Delete uma categoria pelo ID
const deleteById = async (req, res) => {
  const id = req.params.id;

  if (!isObjectIdValid(id)) {
    return res.status(404).send({ message: "ID inválido" });
  }
  const deletedCategory = await service.deleteById(id);

  if (!deletedCategory) {
    return res.status(404).send({ message: "Categoria não encontrado!" });
  }

  res.send({ message: "Categoria excluido com sucesso!" });
};

// Todas as funções são exportadas
module.exports = {
  readAll,
  create,
  findById,
  update,
  deleteById,
};
