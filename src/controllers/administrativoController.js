var administrativoModel = require("../models/administrativoModel");

function buscarQuantidadeUsuarios(req, res) {
    administrativoModel.buscarQuantidadeUsuarios()
        .then(function(resultado) {
            res.json(resultado);
        })
}

function QuantidadeQuizRespondidos(req, res) {
    administrativoModel.QuantidadeQuizRespondidos()
        .then(function(resultado) {
            res.json(resultado);
        })
}

function usuariosRegistrados(req, res) {
    administrativoModel.usuariosRegistrados()
        .then(function(resultado) {
            res.json(resultado);
        })
}

function quizzesRespondidos(req, res) {
    administrativoModel.quizzesRespondidos()
        .then(function(resultado) {
            res.json(resultado);
        })
}


module.exports = { 
    buscarQuantidadeUsuarios,
    QuantidadeQuizRespondidos,
    usuariosRegistrados,
    quizzesRespondidos,
};