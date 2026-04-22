const express = require("express");
const app = express();

app.use(express.json());

const doencasRoutes = require("./routes/doenca.routes");

app.use("/doencas", doencasRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});