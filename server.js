require("dotenv").config();
const express = require("express");
const cors = require("cors");
const funcionarioRoutes = require("./src/routes/funcionarioRoutes");
const departamentoRoutes = require("./src/routes/departamentoRoutes");
const reportRoutes = require("./src/routes/reportRoutes");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api/doc", reportRoutes);
app.use("/api/funcionarios", funcionarioRoutes);
app.use("/api/departamentos", departamentoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});