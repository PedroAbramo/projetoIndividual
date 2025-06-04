var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController")

// tipo get por conta que vai trazer informações do banco
router.get("/pontuacoes-taticas/:idUsuario", function(req, res) {
    dashboardController.buscarPontuacoesTaticas(req, res);
});

router.get("/pontuacoes-personalidade/:idUsuario", function(req, res) {
    dashboardController.buscarPontuacoesPersonalidade(req, res);
});

module.exports = router;