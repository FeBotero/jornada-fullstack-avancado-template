// Service trabalhan acessando apenas o banco de dados,
// não tendo obrigação de trabalhar com requist ou response
// Faz o meio de campo entre o controller e o model

// Busca os itens
const Item = require("./item.model");

const ObjectId = require("mongoose").Types.ObjectId;

const findAll = () => {
  return Item.find().select("_id name imageUrl");
};

// Cria um novo item
const create = (item) => {
  return Item.create(item);
};
// Localiza um item pelo ID
const findById = (id) => {
  // criamos uma variavel que vai receber a string ID
  const objectId = new ObjectId(id);
  return Item.findById(objectId);
};
// Atualiza um item pelo ID
const update = (id, item) => {
  const objectId = new ObjectId(id);
  // Utilzamos buscar e atualizar
  return Item.findByIdAndUpdate(objectId, item);
};
// Deleta um item pelo ID
const deleteById = (id) => {
  const objectId = new ObjectId(id);
  // Utilizamos buscar e deletar
  return Item.findByIdAndDelete(objectId);
};
module.exports = {
  findAll,
  create,
  findById,
  update,
  deleteById,
};
