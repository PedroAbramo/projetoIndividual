var dashboardModel = require("../models/dashboardModel");

function buscarPontuacoesTaticas(req, res) {
    var idUsuario = req.params.idUsuario;
    dashboardModel.buscarPontuacoesTaticas(idUsuario)
        .then(function(resultado) {
            res.json(resultado[0]); // vai retornar somente o primeiro resultado
        })
}

function buscarPontuacoesPersonalidade(req, res) {
    var idUsuario = req.params.idUsuario;
    dashboardModel.buscarPontuacoesPersonalidade(idUsuario)
        .then(function(resultado) {
            res.json(resultado[0]);
        })
}

function buscarPorcentagemTatico(req, res) {
    dashboardModel.buscarPorcentagemTatico()
        .then(function(resultado) {
            res.json(resultado);
        })
}

module.exports = { 
    buscarPontuacoesTaticas,
    buscarPontuacoesPersonalidade,
    buscarPorcentagemTatico,
}