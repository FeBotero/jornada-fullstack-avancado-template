const express = require("express");

// Importa o controller para usar a rota/
const controller = require("./item.controller");

const router = express.Router();

// ROTAS
router.get("/", controller.findAll);
router.get("/:id", controller.findById);
router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.deleteById);

module.exports = router;
