const departamentoModel = require("../models/departamentoModel");

const getAllDepartamentos = async (req, res) => {
    try {
        const departamentos = await departamentoModel.getDepartamentos();
        res.json(departamentos);
    } catch (error) {
        res.status(500).json({ message: "Erro ao buscar departamentos!" });
    }
};

module.exports = { getAllDepartamentos }