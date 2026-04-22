import express from "express";
import DoencasService from "../service/doenca.service.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const data = await DoencasService.getAll();
  res.json(data);
});

router.get("/:id", async (req, res) => {
  const data = await DoencasService.getById(req.params.id);

  if (!data) {
    return res.status(404).json({ erro: "Não encontrado" });
  }

  res.json(data);
});

router.post("/", async (req, res) => {
  const { nome, fatal } = req.body;
  const nova = await DoencasService.create(nome, fatal);
  res.status(201).json(nova);
});

router.put("/:id", async (req, res) => {
  const { nome, fatal } = req.body;

  const atualizado = await DoencasService.update(
    req.params.id,
    nome,
    fatal
  );

  if (!atualizado) {
    return res.status(404).json({ erro: "Não encontrado" });
  }

  res.json(atualizado);
});

router.delete("/:id", async (req, res) => {
  const ok = await DoencasService.delete(req.params.id);

  if (!ok) {
    return res.status(404).json({ erro: "Não encontrado" });
  }

  res.json({ mensagem: "Removido com sucesso" });
});

export default router;
