const express = require("express");
const exemplo = express.Router();
const banco = require("../database/conexao");

// rota para cadastro de produtos
exemplo.post("/", async (req, res) => {
    res.status(500).json({ error: "Erro ao cadastrar produto" });
});

// rota para leitura de produtos
exemplo.get("/", async (req, res) => {
    res.status(500).json({ error: "Erro ao buscar produto" });
});

// rota para buscar um produto em especifico
exemplo.get("/:id", async (req, res) => {
    res.status(500).json({ error: "Erro ao buscar produto" });
});

// rota para buscar atualizar um produto
exemplo.put("/:id", async (req, res) => {
    res.status(500).json({ error: "Erro ao atualizar produto" });
});

// rota para deletar um produto 
exemplo.delete("/:id", async (req, res) => {
    res.status(500).json({ error: "Erro ao deletar produto" });
});

module.exports = exemplo;
