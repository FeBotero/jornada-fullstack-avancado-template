const express = require("express");

// Importa o controller para usar a rota/
const controller = require("./item.controller");

const router = express.Router();

// ROTAS
router.get("/", controller.findAll);

module.exports = router;
