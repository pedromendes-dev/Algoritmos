const express = require("express");
const cors = require("cors");
const votacaoRoutes = require("./routes/votacaoRoutes");
const swaggerUi = require("swagger-ui-express");
const swaggerDoc = require("./openapi.json");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/votacao", votacaoRoutes);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

module.exports = app;
