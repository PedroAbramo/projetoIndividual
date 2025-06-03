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

module.exports = {
    buscarPontuacoesTaticas,
};
