const pool = require("../config/database");

const getFuncionarios = async (name) => {
    if(!name){
        const result = await pool.query("SELECT * FROM funcionarios");
        return result.rows;
    }
    else{
        const result = await pool.query("SELECT * FROM funcionarios WHERE cidade ILIKE $1", [`%${name}%`]);
        return result.rows;
    }
};