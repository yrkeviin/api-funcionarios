const PDFDocument = require("pdfkit");

const DepartamentoModel = require("../models/departamentoModel");

const exportDepartamentoPDF = async (req, res)=> {
    try {
        const departamentos = await DepartamentoModel.getDepartamentos();

        res.setHeader("Content-Type", "application/pdf");
        res.setHeader("Content-Disposition", "inline; filename=users.pdf");

        const doc = new PDFDocument();
        doc.pipe(res);

        //titulo
        doc.fontSize(30).text("Relatorio dos Departamentos", {align: "center"});
        doc.moveDown();

        //cabeçalho
        doc.fontSize(18).text("Id | Nome | Departamento", {underline: true});
        doc.moveDown(0.5);

        // add dados departamentos
        departamentos.forEach((departamentos) => {
            doc.text(
                `${departamentos.id} | ${departamentos.name} | ${departamentos.departamento_id}`,
            )
        });
        doc.end();
    } catch (error) {
        res.status(500).json({message: "erro ao gerar o PDF"})
    }
}

module.exports = {exportDepartamentoPDF}
