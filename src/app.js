const express = require("express");
const cors = require("cors");
const platRoutes = require("./routes/platRoutes");

const app = express();

const helmet = require("helmet");
const morgan = require("morgan");

app.use(helmet());
app.use(morgan("dev"));


app.use(cors());
app.use(express.json());

app.use("/api/plats", platRoutes);
app.get("/", (req, res) => {
  res.send("Bienvenue sur mon API !");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Erreur interne serveur" });
});


module.exports = app;
