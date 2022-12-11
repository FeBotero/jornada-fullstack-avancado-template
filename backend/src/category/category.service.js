// Service trabalhan acessando apenas o banco de dados,
// não tendo obrigação de trabalhar com requist ou response
// Faz o meio de campo entre o controller e o model

// Busca os itens
const Category = require("./category.model");

const ObjectId = require("mongoose").Types.ObjectId;

const findAll = () => {
  return Category.find().select("_id name imageUrl");
};

// Cria um novo categoria
const create = (categoria) => {
  return Category.create(categoria);
};
// Localiza um categoria pelo ID
const findById = (id) => {
  // criamos uma variavel que vai receber a string ID
  const objectId = new ObjectId(id);
  return Category.findById(objectId);
};
// Atualiza um item pelo ID
const update = (id, categoria) => {
  const objectId = new ObjectId(id);
  // Utilzamos buscar e atualizar
  return Category.findByIdAndUpdate(objectId, categoria);
};
// Deleta um categoria pelo ID
const deleteById = (id) => {
  const objectId = new ObjectId(id);
  // Utilizamos buscar e deletar
  return Category.findByIdAndDelete(objectId);
};
module.exports = {
  findAll,
  create,
  findById,
  update,
  deleteById,
};
