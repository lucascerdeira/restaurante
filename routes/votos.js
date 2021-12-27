const express = require('express');

const app = express.Router();

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

app.post('/', (request, response) => {
    const { restaurante , nome } = request.body;

    votos.push({
        restaurante,
        nome,
        "Data_da_votacao": mes + '/' + dia + '/' + anoAtual,
        "Hora_da_votacao": new Date().getHours() + ':' + new Date().getMinutes()
    })

    return response.status(201).send()

})

app.get('/', (request, response) => {
    return response.json(votos)
});


module.exports = app;