var express = require("express");
var router = express.Router();

var musicaController = require("../controllers/musicaController");

router.post("/buscar", function (req, res) {
    musicaController.buscarMusica(req, res);
})


module.exports = router;