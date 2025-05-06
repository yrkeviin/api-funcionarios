const funcionarioModel = require("../models/funcionarioModel");

const getAllFuncionarios = async (req, res) => {
    try {
        const {cidade} = req.query;
        const funcionarios = await funcionarioModel.getFuncionarios(cidade);
        res.json(funcionarios);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar funcionários!" });
        console.error(error);
    }
}

const getFuncionario = async (req, res) => {
    try {
        const funcionario = await funcionarioModel.getFuncionarioById(req.params.id);
        if (!funcionario) {
            return res.status(404).json({ message: "Funcionário não encontrado." });
        }
        res.json(funcionario);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar funcionário!" });
    }
};

module.exports = { getAllFuncionarios, getFuncionario };