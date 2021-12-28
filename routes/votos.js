const express = require('express');
const router = express.Router();
 
const functionDate = require('../functions/functionDate.js');
const functionHours = require('../functions/functionHours.js');
const functionRequisitos = require('../functions/requisitos.js')



// array de armazenamento 
const votos = []; 
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