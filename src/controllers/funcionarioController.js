const funcionarioModel = require("../models/funcionarioModel");

const getAllFuncionarios = async (req, res) => {
    try {
        const {name} = req.query;
        const funcionarios = await funcionarioModel.getFuncionarios(name);
        res.json(funcionarios);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar funcionários!" });
    }
}

module.exports = { getAllFuncionarios };