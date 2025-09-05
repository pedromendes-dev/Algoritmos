const express = require("express");
const cors = require("cors");
const forcaRoutes = require("./routes/forcaRoutes");
const swaggerUi = require("swagger-ui-express");
const swaggerDoc = require("./openapi.json");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/forca", forcaRoutes);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

module.exports = app;
