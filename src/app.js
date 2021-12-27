const express = require('express');
const { v4: uuidv4 } = require('uuid');

const server = express();

server.use(express.json());

// array de armmazenamento dos cadastros
const restaurantes = [];

// bloco para criar os cadastros
server.post('/cadastro', (request, response) => {
    const { name, endereco } = request.body;

    const restauranteExistente = restaurantes.some(
        (restaurante) => restaurante.ids === ids && restaurante.name === name)
 
    if (restauranteExistente) {
        return response.status(400).json({error: 'Restaurante já Cadastrado!'})
    }
    /*/ aqui vai barrar se tentar cadastrar nome parecido ou gerar algum ID igual
    if (restauranteExistente) {
        return response.status(400).json({erro: "Restaurante já Cadastrado!"})

    }; */

    restaurantes.push({ 
        name,
        endereco,
        id:uuidv4()
    });

    // testar cadastrar um usuario depois de cadastrar 2 
    ids = restaurantes[2];
    
    return response.status(201).send()
});

// bloco para retornar todos os restaurantes 
server.get('/lista', (request, response) => {

    return response.json(restaurantes)
    
});

server.listen(3031);
