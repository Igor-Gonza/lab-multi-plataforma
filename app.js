const express = require('express')

const app = express()

app.get("/", (req, res) => {
    res.send("<h1>Home</h1>")
})

app.get("/cadastrar", (req, res) => {
    res.send("<h1>Página de Cadastro</h1>")
})

app.get("/cadastrar/:item", (req, res) => {
    res.send("<h1>Cadastrando item " + req.params.item + "</h1>")
})

app.get("/contato", (req, res) => {
    res.send("<h1>Página de Contato</h1>")
})

app.listen(8081, () => {
    console.log("Servidor ativo!")
})