const express = require('express');
const router = express.Router();

const router = express.Router();

// array de armmazenamento dos cadastros
const restaurantes = [];

// bloco para criar os cadastros
router.post('/cadastro', (request, response) => {
    const { name, endereco } = request.body

    const restauranteExistente = restaurantes.find(
        (restaurante) => restaurante.ids === ids || restaurante.name === name)
 
        
    // aqui vai barrar se tentar cadastrar nome parecido ou gerar algum ID igual
    if (restauranteExistente) {
        return response.status(400).json({erro: "Restaurante já Cadastrado!"})

    };

    restaurantes.push({ 
        name,
        endereco,
        id:uuidv4()
    })

    ids = restaurantes[2]

    return response.status(201).send()
});

// bloco para retornar todos os restaurantes 
router.get('/restaurantes', (request, response) => {

    //return response.json(buscarnome())
    // esse é o que está retornando certo 
    return response.json(restaurantes)
    //return response.json(BuscarNome())
});

module.exports = router