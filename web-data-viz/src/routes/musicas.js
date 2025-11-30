var express = require("express");
var router = express.Router();

var musicaController = require("../controllers/musicaController");

router.get("/buscar", function (req, res) {
    musicaController.buscarMusica(req, res);
});

router.post("/cadastrar", function (req, res) {
    musicaController.cadastrar(req, res);
});

module.exports = router;