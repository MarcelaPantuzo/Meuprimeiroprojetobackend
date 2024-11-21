const express = require("express"); // Iniciando o express
const router = express.Router(); // Configurando o router
const cors = require("cors"); //aqui estou trazendo o pacote Cors que permite consumir essa API no Frontend
const conectaBancodeDados = require("./bancoDeDados"); // Ligando ao banco de dados
conectaBancodeDados(); // Chamando a função que conecta o banco de dados

const Mulher = require("./mulherModel");

const app = express(); // Iniciando o app
app.use(express.json());
app.use(cors())

const porta = 3333; // Criando a porta

// GET
async function mostraMulheres(request, response) {
  try {
    const mulheresVindasDoBancoDeDados = await Mulher.find();
    response.json(mulheresVindasDoBancoDeDados);
  } catch (erro) {
    response.status(500).json({ mensagem: "Erro ao buscar mulheres", erro });
  }
}

// POST
async function criaMulher(request, response) {
  const novaMulher = new Mulher({
    nome: request.body.nome,
    imagem: request.body.imagem,
    minibio: request.body.minibio,
    citacao: request.body.citacao,
  });

  try {
    const mulherCriada = await novaMulher.save();
    response.status(201).json(mulherCriada);
  } catch (erro) {
    response.status(500).json({ mensagem: "Erro ao criar mulher", erro });
  }
}

// PATCH
async function corrigeMulher(request, response) {
  try {
    const mulherEncontrada = await Mulher.findById(request.params.id);

    if (request.body.nome) {
      mulherEncontrada.nome = request.body.nome;
    }
    if (request.body.minibio) {
      mulherEncontrada.minibio = request.body.minibio;
    }
    if (request.body.imagem) {
      mulherEncontrada.imagem = request.body.imagem;
    }
    if (request.body.citacao) {
      mulherEncontrada.citacao = request.body.citacao;
    }

    const mulherAtualizadaNoBancoDeDados = await mulherEncontrada.save();
    response.json(mulherAtualizadaNoBancoDeDados);
  } catch (erro) {
    response.status(500).json({ mensagem: "Erro ao atualizar mulher", erro });
  }
}

// DELETE
async function deletaMulher(request, response) {
  try {
    await Mulher.findByIdAndDelete(request.params.id);
    response.json({ mensagem: "Mulher deletada com sucesso!" });
  } catch (erro) {
    response.status(500).json({ mensagem: "Erro ao deletar mulher", erro });
  }
}

// ROTAS
router.get("/mulheres", mostraMulheres);
router.post("/mulheres", criaMulher);
router.patch("/mulheres/:id", corrigeMulher);
router.delete("/mulheres/:id", deletaMulher);

// Usando o router no app
app.use(router);

// PORTA
function mostraPorta() {
  console.log("Servidor criado e rodando na porta", porta);
}

app.listen(porta, mostraPorta); // Servidor ouvindo a porta
