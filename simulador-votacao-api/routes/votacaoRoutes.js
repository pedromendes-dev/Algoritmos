const express = require("express");
const router = express.Router();
const { votar, resultados, historico } = require("../controllers/votacaoController");

router.post("/votar", votar);
router.get("/resultados", resultados);
router.get("/historico", historico);

module.exports = router;
