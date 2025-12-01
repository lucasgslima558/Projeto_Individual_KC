var express = require("express");
var router = express.Router();

var avaliacaoController = require("../controllers/avaliacaoController")

router.get("/dashboard", function (req, res) {
    avaliacaoController.buscarResumoAlbum(req, res);
});

module.exports = router;