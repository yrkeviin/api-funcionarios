const express = require("express");
const router = express.Router();
const departamentoController = require("../controllers/departamentoController");

router.get("/", departamentoController.getAllDepartamentos);

module.exports = router;