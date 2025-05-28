var database = require("../database/config");

function salvarResultadosQuiz(idUsuario, tatico, personalidade, perfilTatico, perfilPersonalidade) {
    var sqlTatico = `
        INSERT INTO nivel_tatico (entry_fragger, support, lurker, awper, igl, fk_idUsuario)
        VALUES (${tatico.entry_fragger}, ${tatico.support}, ${tatico.lurker}, ${tatico.awper}, ${tatico.igl}, ${idUsuario});
    `;

    var sqlPersonalidade = `
        INSERT INTO nivel_personalidade (hardcore, casual, social, relaxado, aprendiz, fk_idUsuario)
        VALUES (${personalidade.hardcore}, ${personalidade.casual}, ${personalidade.social}, ${personalidade.relaxado}, ${personalidade.aprendiz}, ${idUsuario});
    `;

    console.log("Executando a instrução SQL para inserir nivel_tatico:\n" + sqlTatico);

    return database.executar(sqlTatico)
        .then(resultTatico => {
            const idTatico = resultTatico.insertId;
            console.log("Executando a instrução SQL para inserir nivel_personalidade:\n" + sqlPersonalidade);
            return database.executar(sqlPersonalidade)
                .then(resultPersonalidade => {
                    const idPersonalidade = resultPersonalidade.insertId;
                    var sqlResultado = `
                        INSERT INTO resultado_quiz (perfil_tatico, perfil_personalidade, fk_idUsuario, fk_nivelTatico, fk_nivelPersonalidade)
                        VALUES ('${perfilTatico}', '${perfilPersonalidade}', ${idUsuario}, ${idTatico}, ${idPersonalidade});
                    `;
                    console.log("Executando a instrução SQL para inserir resultado_quiz:\n" + sqlResultado);
                    return database.executar(sqlResultado)
                        .then(result => {
                            console.log("Resultado do quiz inserido com sucesso para o usuário ID:", idUsuario);
                            return result;
                        });
                });
        });
}

module.exports = { salvarResultadosQuiz };