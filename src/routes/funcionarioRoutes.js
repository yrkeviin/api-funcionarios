const express = require("express");
const router = express.Router();
const funcionarioController = require("../controllers/funcionarioController");
const apiKeyMiddleware = require("../config/apiKey"); // 🔐

router.get("/", funcionarioController.getAllFuncionarios);

router.use(apiKeyMiddleware); // 🔒 Aplica para todas as rotas abaixo

module.exports = router;
