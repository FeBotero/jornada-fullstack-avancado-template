const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
});

// Aqui criamos realmente o model, onde passamos como paramentro "nome" e o schema "itemSchema"
const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
