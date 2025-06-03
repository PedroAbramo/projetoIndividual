// Importa a configuração do banco de dados
var database = require("../database/config");

function salvarResultadosQuiz(idUsuario, tatico, personalidade, perfilTatico, perfilPersonalidade) {
    var sqlTatico = `
        INSERT INTO nivel_tatico (entry_fragger, support, lurker, awper, igl, fk_idUsuario)
        VALUES (${tatico.entry_fragger}, ${tatico.support}, ${tatico.lurker}, ${tatico.awper}, ${tatico.igl}, ${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + sqlTatico);

    var sqlPersonalidade = `
        INSERT INTO nivel_personalidade (hardcore, casual, social, relaxado, aprendiz, fk_idUsuario)
        VALUES (${personalidade.hardcore}, ${personalidade.casual}, ${personalidade.social}, ${personalidade.relaxado}, ${personalidade.aprendiz}, ${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + sqlPersonalidade);

    // Executa o insert em nivel_tatico
    return database.executar(sqlTatico)
        .then(resultTatico => {
            const idTatico = resultTatico.insertId;
            // Executa o insert em nivel_personalidade
            return database.executar(sqlPersonalidade)
                .then(resultPersonalidade => {
                    const idPersonalidade = resultPersonalidade.insertId;
                    var sqlResultado = `
                        INSERT INTO resultado_quiz (perfil_tatico, perfil_personalidade, fk_idUsuario, fk_nivelTatico, fk_nivelPersonalidade)
                        VALUES ('${perfilTatico}', '${perfilPersonalidade}', ${idUsuario}, ${idTatico}, ${idPersonalidade});
                    `;
                    console.log("Executando a instrução SQL: \n" + sqlResultado);
                    // Executa o insert em resultado_quiz
                    return database.executar(sqlResultado);
                });
        });
}

module.exports = { 
    salvarResultadosQuiz 
};