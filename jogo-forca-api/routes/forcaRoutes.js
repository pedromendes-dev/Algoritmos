const express = require("express");
const router = express.Router();
const { iniciarJogo, tentarLetra, statusAtual, reiniciarJogo } = require("../controllers/forcaController");

router.get("/iniciar", iniciarJogo);
router.post("/tentar", tentarLetra);
router.get("/status", statusAtual);
router.post("/reiniciar", reiniciarJogo);

module.exports = router;
