var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController")

// tipo get por conta que vai trazer informações do banco
router.get("/pontuacoes-taticas/:idUsuario", function(req, res) {
    dashboardController.buscarPontuacoesTaticas(req, res);
});
// é usado pq é um valor dinânimio, ou seja, pode variar de acordo com o id do usuário logado
router.get("/pontuacoes-personalidade/:idUsuario", function(req, res) {
    dashboardController.buscarPontuacoesPersonalidade(req, res);
});

router.get("/porcentagem-tatico", function(req, res) {
    dashboardController.buscarPorcentagemTatico(req, res);
});

router.get("/porcentagem-personalidade", function(req, res) {
    dashboardController.buscarPorcentagemPersonalidade(req, res);
});

router.get("/perfil-tatico/:idUsuario", function(req, res) {
    dashboardController.buscarPerfilTatico(req, res);
});

module.exports = router;