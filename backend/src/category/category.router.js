const express = require("express");

// Importa o controller para usar a rota/
const controller = require("./category.controller");

const router = express.Router();

// ROTAS
router.get("/", controller.readAll);
router.post("/", controller.create);

module.exports = router;
