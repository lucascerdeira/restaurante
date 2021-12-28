const express = require('express');
const router = express.Router();

const { v4: uuidv4 } = require('uuid');

//gerando datas exatas  
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
        return response.status(400).json({error: 'Restaurante já Cadastrado!'});
    }

    restaurantes.push({ 
        nome,
        endereco,
        id:uuidv4(),
    });
    
    return response.status(201).send();
});

// bloco para retornar todos os restaurantes 
router.get('/', (request, response) => {

    return response.json(restaurantes);
    
});

router.put('/', (request, response) => {
    
    const { nome }  = request.body;
    const { restaurantes } = request;

    restaurantes.nome = nome;
    return response.status(201).send();

    /*const { index } = request.params;
     const { nome } = request.body;
    restaurantes[index] = nome; */
});


router.delete('/', (request, response) => {
    
    const { restaurantes } = request;

    restaurantes.splice(restaurantes, 1);
    
    return response.status(200).json(restaurantes);
});




module.exports = router;