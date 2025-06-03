var quizModel = require("../models/quizModel");

function salvar(req, res) {
    const { idUsuario, tatico, personalidade, perfilTatico, perfilPersonalidade } = req.body;
    // req.body é corpo do site, ou seja, onde são coletados os dados do front-end

    quizModel.salvarResultadosQuiz(idUsuario, tatico, personalidade, perfilTatico, perfilPersonalidade)
        .then(function(resultado) {
            res.json(resultado);
            // resposta em formato json, nesse caso, o resultado do quiz
        })
        .catch(function(erro) {
            res.status(500).json({ erro: erro.sqlMessage });
            // 500 é Erro Interno do Servidor 
        });
}

module.exports = { salvar };