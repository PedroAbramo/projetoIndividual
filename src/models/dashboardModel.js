var database = require("../database/config");

// Função para trazer do banco de dados as pontuações táticas do usuário logadono site
function buscarPontuacoesTaticas(idUsuario) {
    var instrucao = `
        SELECT entry_fragger, support, lurker, awper, igl
        FROM nivel_tatico
        WHERE fk_idUsuario = ${idUsuario}
        ORDER BY idTatico DESC
        LIMIT 1;
    `;
    return database.executar(instrucao);
}

function buscarPontuacoesPersonalidade(idUsuario) {
    var instrucao = `
        SELECT hardcore, casual, social, relaxado, aprendiz
        FROM nivel_personalidade
        WHERE fk_idUsuario = ${idUsuario}
        ORDER BY idPersonalidade DESC
        LIMIT 1;
    `;
    return database.executar(instrucao);
}

function buscarPorcentagemTatico() {
    var instrucao = `
        SELECT perfil_tatico, COUNT(*) AS quantidade
        FROM resultado_quiz
        GROUP BY perfil_tatico
        ORDER BY quantidade DESC;
    `;
    return database.executar(instrucao);
}

function buscarPorcentagemPersonalidade() {
    var instrucao = `
        SELECT perfil_personalidade, COUNT(*) AS quantidade
        FROM resultado_quiz
        GROUP BY perfil_personalidade
        ORDER BY quantidade DESC;
    `;
    return database.executar(instrucao);
}

function buscarPerfilTatico(idUsuario) {
    var instrucao = `
        SELECT fk_idUsuario AS idUsuario, perfil_tatico AS tatico, perfil_personalidade AS personalidade, data_realizacao as realizacao 
        FROM resultado_quiz 
        WHERE fk_idUsuario = ${idUsuario}
        ORDER BY data_realizacao DESC 
        LIMIT 1;
    `;
    return database.executar(instrucao);
}



module.exports = {
    buscarPontuacoesTaticas,
    buscarPontuacoesPersonalidade,
    buscarPorcentagemTatico,
    buscarPorcentagemPersonalidade,
    buscarPerfilTatico,
};
