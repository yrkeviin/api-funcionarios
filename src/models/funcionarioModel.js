const pool = require("../config/database");

const getFuncionarios = async (cidade) => {
    if(!cidade){
        const result = await pool.query("SELECT * FROM funcionarios");
        return result.rows;
    }
    else{
        const result = await pool.query("SELECT * FROM funcionarios WHERE name ILIKE $1", [`%${cidade}%`]);
        return result.rows;
    }
};

const getFuncionarioById = async (id) => {
    const result = await pool.query(
        `SELECT funcionarios.*, departamentos.name AS departamento_name 
         FROM funcionarios 
         LEFT JOIN departamentos ON funcionarios.departamento_id = departamentos.id 
         WHERE funcionarios.id = $1`, [id]
    );
    return result.rows[0];
};

const createFuncionario = async (name, cidade, departamento_id) => {
    const result = await pool.query(
        "INSERT INTO funcionarios (name, cidade, departamento_id) VALUES ($1, $2, $3) RETURNING *",
        [name, cidade, departamento_id]
    );
    return result.rows[0];
};

const updateFuncionario = async (id, name, cidade, departamento_id) => {
    const result = await pool.query(
        "UPDATE funcionarios SET name = $1, cidade = $2, departamento_id = $3 WHERE id = $4 RETURNING *",
        [name, cidade, departamento_id, id]
    );
    return result.rows[0];
};

const deleteFuncionario = async (id) => {
    await pool.query("DELETE FROM funcionarios WHERE id = $1", [id]);
    return { message: "Funcionário deletado" };
};

module.exports = { getFuncionarios, getFuncionarioById, createFuncionario, updateFuncionario, deleteFuncionario };