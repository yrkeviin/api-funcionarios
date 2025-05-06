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
        const { name } = req.body;
        const newDepartamento = await departamentoModel.createDepartamento(name);;
        res.status(201).json(newDepartamento);
    } catch (error) {
        res.status(500).json({ message: "Erro ao criar departamento!" });
    }
};

const updateDepartamento = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;

        const updatedDepartamento = await departamentoModel.updateDepartamento(id, name);

        if (!updatedDepartamento) {
            return res.status(404).json({ message: "Departamento não encontrado!" });
        }

        res.json(updatedDepartamento);
    } catch (error) {
        console.error("Erro ao atualizar departamento:", error);
        res.status(500).json({ message: "Erro ao atualizar departamento!" });
    }
};

const deleteDepartamento = async (req, res) => {
    try {
        const departamentoDeleted = await departamentoModel.deleteDepartamento(req.params.id);
        if (!departamentoDeleted) {
            return res.status(404).json({ message: "Departamento não encontrado!" });
        }
        res.json({ message: "Departamento deletado com sucesso!" });
    } catch (error) {
        res.status(500).json({ message: "Erro ao deletar departamento!" });
    }
};

module.exports = { getAllDepartamentos, getDepartamento, createDepartamento, updateDepartamento, deleteDepartamento };
