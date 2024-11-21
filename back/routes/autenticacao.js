const express = require("express");
const userAuth = express.Router();
const banco = require("../database/conexao");

// Função para gerar o token JWT

// Rotas ..................
userAuth.post("/cadastrar", (req, res) => {
  const { nome, email } = req.body;
  const query = "INSERT INTO users (name, email) VALUES (?, ?)";
  banco.query(query, [nome, email], (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(201).json({ id: result.insertId, nome, email });
  });
});

// Read
userAuth.get("/", (req, res) => {
  const query = "SELECT * FROM users";
  banco.query(query, (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
});

// Update
userAuth.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const query = "UPDATE users SET name = ?, email = ? WHERE id = ?";

  banco.query(query, [name, email, id], (err, result) => {
    if (err) return res.status(500).json(err);
    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Usuário não encontrado" });
    res.json({ message: "Usuário atualizado com sucesso" });
  });
});

// Delete
userAuth.delete("/deletar/:id", (req, res) => {
  const { id } = req.params;
  const query = "DELETE FROM users WHERE id = ?";
  banco.query(query, [id], (err, result) => {
    if (err) return res.status(500).json(err);
    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Usuário não encontrado" });
    res.json({ message: "Usuário deletado com sucesso" });
  });
});

module.exports = userAuth;
