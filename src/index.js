const express = require('express')

// library para gerar idS random 
const { v4: uuidv4 } = require('uuid')

const server = express()


// informando ao express que vou usar saida de dados JSON 
server.use(express.json())

// array de armmazenamento dos cadastros
const restaurantes = []

// funão para buscar só o nom de um restaurante
function BuscarNome(query) {
   return  restaurantes.filter(function(n) {
       return n.toLowerCase().indexOf(query.toLowerCase()) > -1;
   })
}

function buscarnome(query) {
    const splits = restaurantes.slipt()
    return consoe.log(splits[0])
}
// bloco para criar os cadastros
server.post('/cadastro', (request, response) => {
    const { name, endereco } = request.body

    const restauranteExistente = restaurantes.find(
        (restaurante) => restaurante.ids === ids && restaurante.name === name)

    // aqui vai barrar se tentat cadastrar nome parecido ou gerar algum ID igual
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
})


/*server.get('/restaurantes/:index', (request, response) => {
    const { index } = request.params
    return response.json(restaurantes[index])

}) */

// bloco para retornar todos os restaurantes // falta retornar somento os names
server.get('/restaurantes', (request, response) => {

    //return response.json(buscarnome())
    // esse é o que está retornando certo 
    return response.json(restaurantes)
    //return response.json(BuscarNome())
})

// bloco para atualizaão de name and endereco para
server.put('/')


// url para o isomnia
server.listen(3031)