// Arquivo padrão para chamar a biblioteca node
var express = require("express");
var router = express.Router();


// Importando o controller
var quizController = require("../controllers/quizController");

// Tipo post porque vai salvar os dados do quiz
// req é uma requisição, ou seja, tudo que vem do front-end (Request) body [dados no corpo: formulário, json]
// res é uma resposta, ou seja, tudo que vai para o front-end (Response) resposta, status, json
router.post("/salvar", function (req, res) {
    quizController.salvar(req, res);
});

module.exports = router;