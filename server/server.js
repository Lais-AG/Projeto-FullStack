//Criar a estrutura CRUD, Create, Read(unicidade: id, cpf), Update, Delete
const express = require('express');
const app = express();
const port = 3000; 
const cors = require('cors');

app.use(cors());
app.use(express.json());

//Õ endereço da minha API é: http://localhost:3000
//get:capturar/ receber uma informação
let usuarios = [];

app.get('/usuarios', (req, res)=>{
    res.json(usuarios)
})

//criar uma nova informação no meu banco de dados
app.post('/usuarios', (req, res)=>{
    const novoUsuario = req.body;
    console.log("usuário recebido", novoUsuario);
    
    novoUsuario.id = usuarios.length + 1;
    usuarios.push(novoUsuario);
    res.status(201).json({mensagem:'Usuário criado com sucesso'})
})

//atualizar uma informação existente
//app.put()

//deletar uma informação existente
//app.delete()

//escutar minha apliacação em uma porta
app.listen(port, ()=>{
    console.log(`Servidor rodando na porta ${port}`)
})
