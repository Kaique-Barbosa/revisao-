const e = require('express')
const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: "localhost",
    port: 3307,
    user:"root",
    password:"",
    database:"crud_example"
})

conexao.connect((err)=>{
    if(err){
        console.log("Erro ao conectar ao banco de dados", err)
        return
    }
    console.log("conectado ao banco de dados")
})

module.exports = conexao
