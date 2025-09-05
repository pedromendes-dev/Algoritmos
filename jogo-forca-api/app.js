const express = require("express");
const cors = require("cors");
const forcaRoutes = require("./routes/forcaRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/forca", forcaRoutes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`🎮 Forca API rodando em http://localhost:${PORT}`);
});
