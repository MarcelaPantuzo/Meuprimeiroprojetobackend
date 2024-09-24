const express = require("express")
const router = express.Router()
const app = express()
const porta = 5812


function mostraMulher(request, response) {
response.json({
    nome: "Marcela Pantuzo" ,
    imagem: "https://learn.microsoft.com/pt-br/shows/hello-world/media/helloworld_383x215.png" , 
    minibio: "Product Owner e Desenvolvedora"  
    })
}
function mostraPorta () {
    console.log("servidor criado e rodando na porta " , porta)
}

app.use(router.get("/mulher", mostraMulher))
app.listen(porta, mostraPorta)