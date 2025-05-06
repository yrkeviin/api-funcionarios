const express = require("express");
const router = express.Router();
const funcionarioController = require("../controllers/funcionarioController");
const apiKeyMiddleware = require("../config/apiKey"); // 🔐

router.use(apiKeyMiddleware); // 🔒 Aplica para todas as rotas abaixo

router.get("/", funcionarioController.getAllFuncionarios);
router.get("/:id", funcionarioController.getFuncionario);
router.post("/", funcionarioController.createFuncionario);
router.put("/:id", funcionarioController.updateFuncionario);
router.delete("/:id", funcionarioController.deleteFuncionario);

module.exports = router;