const express = require("express");
const router = express.Router();
const {
  listarTarefas,
  adicionarTarefa,
  concluirTarefa,
  deletarTarefa,
} = require("../controllers/tarefasController");

router.get("/", listarTarefas);
router.post("/", adicionarTarefa);
router.patch("/:id/concluir", concluirTarefa);
router.delete("/:id", deletarTarefa);

module.exports = router;
