const express = require('express');
const cadastroRestaurante = require('../routes/cadastroRestaurante');
const router = express.Router();

router.get('/', (request, response) => {
    const {vencer} = cadastroRestaurante.body
    return response.json(vencer)
})

module.exports = router;