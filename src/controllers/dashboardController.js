var dashboardModel = require("../models/dashboardModel");

function buscarPontuacoesTaticas(req, res) {
    var idUsuario = req.params.idUsuario;
    dashboardModel.buscarPontuacoesTaticas(idUsuario)
        .then(function(resultado) {
            res.json(resultado[0]); // vai retornar somente o primeiro resultado
        })
}

module.exports = { buscarPontuacoesTaticas }