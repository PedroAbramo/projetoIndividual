// Importa a configuração do banco de dados
var database = require("../database/config");

// .then é quando dá certo, ou seja, quando a query é executada com sucesso
// .catch é quando dá erro, ou seja, quando a query não é executada com sucesso

function salvarResultadosQuiz(idUsuario, tatico, personalidade, perfilTatico, perfilPersonalidade) {
    var sqlTatico = `
        INSERT INTO nivel_tatico (entry_fragger, support, lurker, awper, igl, fk_idUsuario)
        VALUES (${tatico.entry_fragger}, ${tatico.support}, ${tatico.lurker}, ${tatico.awper}, ${tatico.igl}, ${idUsuario});
    `;
    console.log("Executando a instrução SQL para nível tático: \n" + sqlTatico);

    var sqlPersonalidade = `
        INSERT INTO nivel_personalidade (hardcore, casual, social, relaxado, aprendiz, fk_idUsuario)
        VALUES (${personalidade.hardcore}, ${personalidade.casual}, ${personalidade.social}, ${personalidade.relaxado}, ${personalidade.aprendiz}, ${idUsuario});
    `;
    console.log("Executando a instrução SQL para nível de personalidade: \n" + sqlPersonalidade);

    return database.executar(sqlTatico)
    
    .then(function(resultTatico) {
        var idTatico = resultTatico.insertId;
        return database.executar(sqlPersonalidade)           
    .then(function(resultPersonalidade) {
        var idPersonalidade = resultPersonalidade.insertId;

        var sqlResultado = `
            INSERT INTO resultado_quiz (perfil_tatico, perfil_personalidade, fk_idUsuario, fk_nivelTatico, fk_nivelPersonalidade)
            VALUES ('${perfilTatico}', '${perfilPersonalidade}', ${idUsuario}, ${idTatico}, ${idPersonalidade});
        `;
        console.log("Executando a instrução SQL para salvar o resultado do quiz: \n" + sqlResultado);

            return database.executar(sqlResultado);
        })
    })
}

module.exports = { 
    salvarResultadosQuiz 
};