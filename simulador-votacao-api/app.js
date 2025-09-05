const express = require("express");
const cors = require("cors");
const votacaoRoutes = require("./routes/votacaoRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/votacao", votacaoRoutes);

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`🗳️ Votação API rodando em http://localhost:${PORT}`);
});
