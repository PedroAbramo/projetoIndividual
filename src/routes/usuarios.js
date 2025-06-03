var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

// Function para contar usuários
// Tipo get porque não vai salvar dados, apenas vai contar
// get é usado para obter dados do banco de dados
router.get("/contar", function (req, res) {
    var usuarioModel = require("../models/usuarioModel");
    usuarioModel.contarUsuarios()
        .then(resultado => res.json(resultado))
        .catch(erro => {
            console.log(erro);
            res.status(500).json({ erro: erro.sqlMessage });
        });
});

// Function para obter usuários por dia
router.get("/usuarios-por-dia", function (req, res) {
    var usuarioModel = require("../models/usuarioModel");
    usuarioModel.usuariosPorDia()
        .then(resultado => res.json(resultado))
        .catch(erro => {
            console.log(erro);
            res.status(500).json({ erro: erro.sqlMessage });
        });
});

module.exports = router;