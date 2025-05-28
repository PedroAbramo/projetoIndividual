var quizModel = require("../models/quizModel");

function salvar(req, res) {
    const { idUsuario, tatico, personalidade, perfilTatico, perfilPersonalidade } = req.body;

    quizModel.salvarResultadosQuiz(idUsuario, tatico, personalidade, perfilTatico, perfilPersonalidade)
        .then(resultado => res.json({ ok: true, resultado }))
        .catch(erro => {
            console.log(erro);
            res.status(500).json({ erro: erro.sqlMessage });
        });
}

module.exports = { salvar };