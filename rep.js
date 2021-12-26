const express = require('express');
const { v4: uuid } = require('uuid')
const app = express();
const cadastro_restaurante = []

app.post('/cadastro', (req, res) => {
        const { name } = req.body;

    cadastro_restaurante.push({
        //id: uuid.v4(),
        id: 1,
        name,
        endereco
    })

    // retornar ok caso seja cadastrado
    return res.status(201).send()
})

app.get('/cadastro', (req, res) => {
    return res.json({})
})

app.listen(3031);


