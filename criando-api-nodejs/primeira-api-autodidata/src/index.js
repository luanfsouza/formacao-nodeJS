import { dados } from "../database/index.js";
import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(dados);
});

app.listen(port, () => {
  console.log("conctado");
});
