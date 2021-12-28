// importanto para usar as rotas 
const express = require('express');
const router = express.Router();

// v4 vai gerar um id totaltamente random 
const { v4: uuidv4 } = require('uuid');

const x = 1
// bloco para criar os cadastros
// array de armmazenamento dos cadastros
const restaurantes = [];
router.post('/', (request, response) => {
    const { nome, endereco } = request.body;

    // com o some vai retornar se já existe o restaurante 
    //some só retorna true or false | existe ou não existe
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
    console.log(restaurantes[2])
    return response.status(201).send();
});

// bloco para retornar todos os restaurantes 
router.get('/', (request, response) => {
    
    return response.json(restaurantes);
});


// bloco de votos 
const functionDate = require('../functions/functionDate.js');
const functionHours = require('../functions/functionHours.js');

// array de armazenamento 
const votos = []; 
router.post('/votos', (request, response) => {
    const { restaurante , participante } = request.body;

    const restauranteExistente = restaurantes.some(
        (restaurant) => restaurant.nome === restaurante)

    const votoExistente = votos.some(
        (voto) => voto.participante === participante)
    
        if(votoExistente) {
            return response.status(400).json({error: 'Só se pode votar uma vez'})
            }
    if (!restauranteExistente) {
        return response.status(400).json({error: 'Restaurante não cadastrado!'});
    } else {
        votos.push({
            restaurante,
            participante,
            //dia + '/' + mes + '/' + anoAtual,
            "Data da votação": functionDate(),
            //new Date().getHours() + ':' + new Date().getMinutes()
            "Hora da votação": functionHours()
        });
    }
    

        return response.status(201).send()
});



router.get('/votos', (request, response) => {

    return response.json(votos);

});

module.exports = router;