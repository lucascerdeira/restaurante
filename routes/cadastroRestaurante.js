const express = require('express');

const router = express.Router();

const { v4: uuidv4 } = require('uuid');

// gerando datas extas  
const data = new Date();
const mes = data.getMonth();
const dia = data.getDate();
const anoAtual = data.getFullYear();



// array de armmazenamento dos cadastros
const restaurantes = [];

// bloco para criar os cadastros
router.post('/', (request, response) => {
    const { nome, endereco } = request.body;

    const restauranteExistente = restaurantes.some(
        (restaurante) => restaurante.nome === nome)
 
    if (restauranteExistente) {
        return response.status(400).json({error: 'Restaurante já Cadastrado!'})
    }

    restaurantes.push({ 
        nome,
        endereco,
        id:uuidv4(),
        "creat_date": mes + '/' + dia + '/' + anoAtual,
        // pegando a hora exata
        "create_hours": new Date().getHours() + ':' + new Date().getMinutes()
    });
    
    return response.status(201).send()
});

// bloco para retornar todos os restaurantes 
router.get('/', (request, response) => {

    return response.json(restaurantes)
    
});

router.put('/lista', (request, response) => {
    
    const { name } = request.headers;
    
    restaurantes.push(name)

    return response.json(restaurantes)
});


router.delete('/lista', (request, response) => {

});

module.exports = router;