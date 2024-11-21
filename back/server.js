const express = require("express");
const cors = require("cors");

//conexao com o banco
 const conexao = require('./database/conexao')

// INORTAÇÂO DE ROTAS
const auth = require("./routes/autenticacao");
const produto = require("./routes/produtos");

// DICAS PARA DEGUUGAR ERROS
// USAR:
// console.log(req.params)
// console.log(req.body)

const app = express();
const port = process.env.PORT || 3010; // porta onde o server rosará
app.use(cors());
app.use(express.json());


// uso de rotas

app.use("/usuario", auth);
app.use("/produtos", produto);



// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
