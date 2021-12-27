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
router.post('/cadastro', (request, response) => {
    const { name, endereco } = request.body;

    const restauranteExistente = restaurantes.some(
        (restaurante) => restaurante.name === name)
 
    if (restauranteExistente) {
        return response.status(400).json({error: 'Restaurante já Cadastrado!'})
    }

    restaurantes.push({ 
        name,
        endereco,
        id:uuidv4(),
        "creat_date": mes + '/' + dia + '/' + anoAtual,
        // pegando a hora exata
        "create_hours": new Date().getHours() + ':' + new Date().getMinutes()

        //+ '/' + new Date().getFullYear, aparece que é um [ntive code]
        // tem essa opção também "create_ano": new Date()
    });
    
    return response.status(201).send()
});

// bloco para retornar todos os restaurantes 
router.get('/lista', (request, response) => {

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