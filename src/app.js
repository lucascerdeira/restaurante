const express = require('express');
const server = express();
const cadastro = require('../routes/cadastroRestaurante');
const votos = require('../routes/votos');


// informando ao express que vamos usar dados json
server.use(express.json());

server.use('/cadastro', cadastro);

server.use('/voto', votos)

server.listen(3031);
