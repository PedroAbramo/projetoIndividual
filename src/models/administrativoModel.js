var database = require("../database/config");

function buscarQuantidadeUsuarios() {
    var instrucao = `
        SELECT DATE(data_criacao) AS dia, count(*) AS quantidade 
        FROM usuario 
        GROUP BY DATE(data_criacao) 
        ORDER BY dia asc;
    `;
    return database.executar(instrucao);
}

module.exports = {
    buscarQuantidadeUsuarios, 
}