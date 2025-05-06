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

const createFuncionario = async (req, res) => {
    try {
        const { name, cidade, departamento_id} = req.body;
        const newFuncionario = await funcionarioModel.createFuncionario(name, cidade, departamento_id);
        res.status(201).json(newFuncionario);
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar funcionário!" });
    }   
};

const updateFuncionario = async (req, res) => {
    const { name, cidade, departamento_id } = req.body;
    const updatedFuncionario = await funcionarioModel.updateFuncionario(req.params.id, name, cidade, departamento_id);
    res.json(updatedFuncionario);
};

module.exports = { getAllFuncionarios, getFuncionario, createFuncionario, updateFuncionario };