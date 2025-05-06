const departamentoModel = require("../models/departamentoModel");

const getAllDepartamentos = async (req, res) => {
    try {
        const departamentos = await departamentoModel.getDepartamentos();
        res.json(departamentos);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar departamentos!" });
    }
};

const getDepartamento = async (req, res) => {
    try {
        const departamento = await departamentoModel.getDepartamentoById(req.params.id);
        if (!departamento) {
            return res.status(404).json({ message: "Departamento não encontrada!" });
        }
        res.json(departamento);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar departamento!" });
    }
};

const createDepartamento = async (req, res) => {
    try {
        const newDepartamento = await departamentoModel.createDepartamento(req.body.name);
        res.status(201).json(newDepartamento);
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar departamento!" });
    }
};

module.exports = { getAllDepartamentos, getDepartamento, createDepartamento };
