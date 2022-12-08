const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  imageUrl: { type: String, required: true },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Category",
  },
});

// Aqui criamos realmente o model, onde passamos como paramentro "nome" e o schema "itemSchema"
const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
