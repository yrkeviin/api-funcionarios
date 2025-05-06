const pool = require("../config/database");

const getDepartamentos = async () => {
    const result = await pool.query("SELECT * FROM departamentos");
    return result.rows;
};

const getDepartamentoById = async (id) => {
    const result = await pool.query("SELECT * FROM departamentos WHERE id = $1", [id]);
    return result.rows[0];
};

const createDepartamento = async (name) => {
    const result = await pool.query(
        "INSERT INTO departamentos (name) VALUES ($1) RETURNING *",
        [name]
    );
    return result.rows[0];
};

module.exports = { getDepartamentos, getDepartamentoById, createDepartamento };
