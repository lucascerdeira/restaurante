const express = require('express');
const functionDate = require('./functionDate.js');
const functionHours = require('./functionHours.js');
const router = express.Router();

const votos = [];

// gerando datas extas  
const data = new Date();
const mes = data.getMonth();
const dia = data.getDate();
const anoAtual = data.getFullYear();

router.post('/', (request, response) => {
    const { restaurante , nome } = request.body;

    
    votos.push({
        restaurante,
        nome,
        "Data_da_votacao": functionDate(),
        //dia + '/' + mes + '/' + anoAtual,
        "Hora_da_votacao": functionHours()
        //new Date().getHours() + ':' + new Date().getMinutes()
    })

    return response.status(201).send()

})

router.get('/', (request, response) => {
    return response.json(votos);
});


module.exports = router;