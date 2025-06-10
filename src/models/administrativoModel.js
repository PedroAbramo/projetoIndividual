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

function QuantidadeQuizRespondidos() {
    var instrucao = `
    SELECT (SELECT COUNT(DISTINCT rq.fk_idUsuario) FROM resultado_quiz rq WHERE rq.fk_idUsuario IS NOT NULL) AS qtd_comQuiz, 
    (SELECT COUNT(*) FROM usuario u WHERE u.idUsuario NOT IN ( SELECT DISTINCT fk_idUsuario FROM resultado_quiz )) AS qtd_semQuiz;

    `;
    return database.executar(instrucao);
}

module.exports = {
    buscarQuantidadeUsuarios,
    QuantidadeQuizRespondidos
}