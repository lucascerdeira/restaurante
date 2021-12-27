const express = require('express');
const server = express();
const cadastro = require('../routes/cadastroRestaurante');
//const votos = require('../routes/votos');


// informando ao express que vamos usar dados json
server.use(express.json());

server.use('/', cadastro);

//server.use('/', votos);


const votos = []

// gerando datas extas  
const data = new Date();
const mes = data.getMonth();
const dia = data.getDate();
const anoAtual = data.getFullYear();

// gerando um hr pt-br
const horas = data.getHours();
const minutos = data.getMinutes();
const horario = [horas + minutos].json

server.post('/votos', (request, response) => {
    const { id , name } = request.body;


    votos.push({

        id,
        name,
        "Data_da_votacao": mes + '/' + dia + '/' + anoAtual,
        "Hora_da_votacao": new Date().getHours() + ':' + new Date().getMinutes()
    })

    return response.status(201).send()

})

server.get('/votos', (request, response) => {
    return response.json(votos)
});

server.listen(3031);
