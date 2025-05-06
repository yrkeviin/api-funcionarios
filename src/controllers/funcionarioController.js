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
        const photo = req.file ? req.file.filename : null;
        const newFuncionario = await funcionarioModel.createFuncionario(name, cidade, photo, departamento_id);
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

const deleteFuncionario = async (req, res) => {
    const message = await funcionarioModel.deleteFuncionario(req.params.id);
    res.json(message);
};

module.exports = { getAllFuncionarios, getFuncionario, createFuncionario, updateFuncionario, deleteFuncionario };