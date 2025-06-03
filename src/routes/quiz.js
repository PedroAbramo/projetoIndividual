// Arquivo padrão para chamar a biblioteca node
var express = require("express");
var router = express.Router();


// Importando o controller
var quizController = require("../controllers/quizController");

// Tipo post porque vai salvar os dados do quiz
router.post("/salvar", function (req, res) {
    quizController.salvar(req, res);
});

module.exports = router;