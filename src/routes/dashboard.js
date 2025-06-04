var express = require("express");
var router = express.Router();

var dashboardController = require("../controllers/dashboardController")

// tipo get por conta que vai trazer informações do banco
router.get("/pontuacoes-taticas/:idUsuario", function(req, res) {
    dashboardController.buscarPontuacoesTaticas(req, res);
});

module.exports = router;