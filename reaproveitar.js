// importação 
const { response } = require('express');
const express = require('express');
const { v4: uuidv4 } = require('uuid'); 

const app = express();

// informando ao express que queremos ler dados com JSON
app.use(express.json());


const restaurantes = []

app.post('/mural', (request, response) => {
    const {id, name } = request.body;

    // se existir id igual, barrar // some é usado para saber se existe ou não
    const restauranteAlreadyExists = restaurantes.some(
        (restaurante) => restaurante.id === id);

    if(restauranteAlreadyExists) {
        return response.status(400).json({error: 'Restaurante já está cadastrado'})
    }

    restaurantes.push({
        id: uuidv4(),
        name,
        contato: []
    })

    return response.status(201).send()
})

app.get('/cadastro/:id', (request, response) => {
    return response.json(restaurantes.contato);

})

app.post('/votação', (request, response) => {

})

app.listen(3031);
