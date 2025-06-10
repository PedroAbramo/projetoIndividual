var express = require("express");
var router = express.Router();
var administrativoController = require("../controllers/administrativoController");

router.get("/buscarQuantidadeUsuarios", function(req, res) {
    administrativoController.buscarQuantidadeUsuarios(req, res);
});

router.get("/QuantidadeQuizRespondidos", function(req, res) {
    administrativoController.QuantidadeQuizRespondidos(req, res);
});



module.exports = router;