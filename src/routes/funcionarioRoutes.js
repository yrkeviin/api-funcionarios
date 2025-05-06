const express = require("express");
const router = express.Router();
const funcionarioController = require("../controllers/funcionarioController");

router.get("/", funcionarioController.getAllFuncionarios);
router.get("/:id", funcionarioController.getFuncionario);

module.exports = router;