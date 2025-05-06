const pool = require("../config/database");

const getDepartamentos = async () => {
    const result = await pool.query("SELECT * FROM departamentos");
    return result.rows;
};

const getDepartamentoById = async (id) => {
    const result = await pool.query("SELECT * FROM departamentos WHERE id = $1", [id]);
    return result.rows[0];
};

const createDepartamento = async (name, photo) => {
    const result = await pool.query(
        "INSERT INTO departamentos (name, photo) VALUES ($1, $2) RETURNING *",
        [name, photo]
    );
    return result.rows[0];
};

const updateDepartamento = async (id, name) => {
    const result = await pool.query(
        "UPDATE departamentos SET name = $1 WHERE id = $2 RETURNING *",
        [name, id]
    );
    return result.rows[0];
};

const deleteDepartamento = async (id) => {
    const result = await pool.query("DELETE FROM departamentos WHERE id = $1 RETURNING *", [id]);
    return result.rows[0];
};

module.exports = { getDepartamentos, getDepartamentoById, createDepartamento, updateDepartamento, deleteDepartamento };
