const express = require("express")

const app = express()
const porta = 5812

function mostraPorta () {
    console.log("servidor criado e rodando na porta " , porta)
}

app.listen(porta, mostraPorta)