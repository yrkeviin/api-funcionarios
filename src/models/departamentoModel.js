const pool = require("../config/database");

const getDepartamentos = async () => {
    const result = await pool.query("SELECT * FROM departamentos");
    return result.rows;
};

module.exports = { getDepartamentos };
