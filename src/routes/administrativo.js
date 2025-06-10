var express = require("express");
var router = express.Router();
var administrativoController = require("../controllers/administrativoController");

router.get("/buscarQuantidadeUsuarios", function(req, res) {
    administrativoController.buscarQuantidadeUsuarios(req, res);
});

router.get("/QuantidadeQuizRespondidos", function(req, res) {
    administrativoController.QuantidadeQuizRespondidos(req, res);
});

router.get("/usuariosRegistrados", function(req, res) {
    administrativoController.usuariosRegistrados(req, res);
});

router.get("/quizzesRespondidos", function(req, res) {
    administrativoController.quizzesRespondidos(req, res);
});




module.exports = router;