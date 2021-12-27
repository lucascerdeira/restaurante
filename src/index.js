const express = require('express');

// library para gerar idS random 
const { v4: uuidv4 } = require('uuid');

const server = express();

//const hora = new Date();
//const horario = hora.getHours();

// informando ao express que vou usar saida de dados JSON 
server.use(express.json());

//const votation = restaurantes;
const votacao = [];



/*server.get('/restaurantes/:index', (request, response) => {
    const { index } = request.params
    return response.json(restaurantes[index])

}) */



// bloco para atualizaão de name and endereco para
server.put('/');


// bloco, votação
server.post('/votation', (request, response) => {
    const { nome } = request.body

    votacao.push[{
        nome,
        "date": new Date(),
        
    }]

    return response.status(201).send()
});

server.get('/votation', (request, response) => {
    return response.json(votacao)
})
// url para o isomnia
server.listen(3031);