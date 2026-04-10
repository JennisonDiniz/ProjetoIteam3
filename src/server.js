// Aula 2 do dia 07/04/2026

//console.log("Hello World!")

//const {somar} = require ('./processador');

//const resultado = somar (6,8)

//const{formatarTexto} = require ('./processador')

//const{enviroment} = require ('./processador')

//console.log(resultado)

//console.log (formatarTexto("Faz o L"));
//console.log(enviroment.production);


// Aula 3 do dia 08/04/2026
//const express = require('express')
//const app = express()
//const port = 3000

//app.get('/', (req, res) => {
  //res.send('Quero ir pra casa')
//})



//app.get('/soma', (req, res) => {

  // const num1 =10
  // const num2 =20
    
  //res.send(`a soma num1 mais num2 e ${num1 + num2}`);
//})



//app.listen(port, () => {
  //console.log(`Example app listening on port ${port}`)
//})

 //Aula 4 do dia 09/04/2026

const express = require('express');
const app = express();

// Middleware para interpretar JSON
app.use(express.json());

let tarefas = [
  { id: 1, descricao: "Estudar Node.js", concluida: true },
  { id: 2, descricao: "Criar API com Express", concluida: false }, // corrigido "cncluida"
];

// Rota inicial
app.get('/', (req, res) => {
  res.send("Bem-vindo à API de Tarefas!");
});

// Rota para listar tarefas
app.get("/tarefas", (req, res) => {
  res.json(tarefas);
});

// Definição da porta
const port = 3000;

// Inicialização do servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

// POST /tarefas - Cria uma nova tarefa
app.post("/tarefas", (req, res) => {
  const novaTarefa = {
    id: tarefas.length + 1, // Simples geração de ID
    descricao: req.body.descricao,
    concluida: false,
  };
  tarefas.push(novaTarefa);
  res.status(201).json(novaTarefa); // 201 significa "Created"
});