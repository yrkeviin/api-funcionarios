const express = require("express");
const router = express.Router();
const departamentoController = require("../controllers/departamentoController");

router.get("/", departamentoController.getAllDepartamentos);
router.get("/:id", departamentoController.getDepartamento);
router.post("/", departamentoController.createDepartamento);
router.put("/:id", departamentoController.updateDepartamento);
router.delete("/:id", departamentoController.deleteDepartamento);

module.exports = router;