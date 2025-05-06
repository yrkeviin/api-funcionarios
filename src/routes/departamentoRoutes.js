const express = require("express");
const router = express.Router();
const departamentoController = require("../controllers/departamentoController");
const upload = require("../config/upload");
const apiKeyMiddleware = require("../config/apiKey"); // 🔐

router.use(apiKeyMiddleware); // 🔒 Aplica para todas as rotas abaixo

router.get("/", departamentoController.getAllDepartamentos);
router.get("/:id", departamentoController.getDepartamento);
router.post("/", upload.single("photo"), departamentoController.createDepartamento);
router.put("/:id", departamentoController.updateDepartamento);
router.delete("/:id", departamentoController.deleteDepartamento);

module.exports = router;