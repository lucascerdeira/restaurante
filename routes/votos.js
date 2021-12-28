const express = require('express');
const router = express.Router();
 
const functionDate = require('../functions/functionDate.js');
const functionHours = require('../functions/functionHours.js');
//const functionRequisitos = require('../functions/requisitos.js')
const restaurant = require('../routes/cadastroRestaurante.js')

// array de armazenamento 
const votos = []; 
router.post('/', restaurant , (request, response) => {
    const { restaurante , nome } = request.body;
    
    if(!restaurant.nome === votos.nome) {
        return response.status(400).json({error: 'not found'})
    }
    votos.push({
        restaurante,
        nome,
        //dia + '/' + mes + '/' + anoAtual,
        "Data_da_votacao": functionDate(),
        //new Date().getHours() + ':' + new Date().getMinutes()
        "Hora_da_votacao": functionHours()
    })

    return response.status(201).send()

})

router.get('/', (request, response) => {
    return response.json(votos);
});

module.exports = router;