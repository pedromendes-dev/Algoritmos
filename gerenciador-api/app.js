const express = require("express");
const cors = require("cors");
const tarefasRoutes = require("./routes/tarefasRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/tarefas", tarefasRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
