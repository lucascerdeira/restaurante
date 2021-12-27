const express = require('express');
const server = express();

server.express(json())

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
    const { restaurante , name } = request.body;


    votos.push({
        restaurante,
        name,
        "Data_da_votacao": mes + '/' + dia + '/' + anoAtual,
        "Hora_da_votacao": new Date().getHours() + ':' + new Date().getMinutes()
    })

    return response.status(201).send()

})

server.get('/votos', (request, response) => {
    return response.json(votos)
})

//module.exports = router;