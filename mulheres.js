const express = require("express")
const router = express.Router()

const app = express()
const porta = 5812

const mulheres = [
  {
    nome: "Larissa Alves" ,
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNzPbzuKIAJE8ZJbCCsgHMKrlZEr4Qb5yzPzYb2AJM_JAm7OdfRDsgqjqFf1QXBDzWbWA&usqp=CAU" , 
    minibio: "Product Owner"  ,
  },

  {
nome: "Jullyane Maria" ,
    imagem: "https://static.portaldaindustria.com.br/portaldaindustria/noticias/media/imagem_plugin/profissionalti.jpg" , 
    minibio: "Desenvolvedora Back End" ,
  },

  {
        nome: "Amanda Silva" ,
        imagem: "https://cdn.unasp.br/blog/wp-content/uploads/2018/02/shutterstock_671632789000.jpg" , 
        minibio: "Quality Assurance" ,
  },

  {
    nome: "Renata Guimarães" ,
    imagem: "https://img.freepik.com/fotos-gratis/programador-afro-americano-sorridente-relaxando-olhando-para-conteudo-engracado-na-tela-do-computador-enquanto-digita-no-teclado-freelancer-rindo-com-amigos-enquanto-conversa-usando-pc-na-sala-de-estar-de-casa_482257-64564.jpg",
    minibio: "Desenvolvedora Front End"
  },

  {
    nome: "Debora Vasconcelos",
    imagem: "https://producaodejogos.com/wp-content/uploads/2014/01/Game_artist.jpg", 
    minibio: "Designer" ,
  },

  {
    nome: "Lara Pereira",
    imagem:"https://image.cdn2.seaart.ai/2024-08-20/cr2ave5e878c739nd3cg/dca898ebddd24e6560f36c74985507f6_high.webp",
    minibio: "Analista de Requisitos",
  },

  {
    nome: "Julia Campos",
    imagem:"https://img.freepik.com/fotos-premium/mulher-asiatica-de-negocios-trabalhando-no-computador-portatil-no-escritorio-em-casa_1645-1377.jpg",
    minibio: "Desenvolvedora Mobile",
  },

]

function mostraMulheres (request, response) {
    response.json(mulheres)
}

function mostraPorta() {
    console.log("servidor criado e rodando na porta " , porta)
}

app.use(router.get("/mulheres", mostraMulheres))
app.listen(porta, mostraPorta)
