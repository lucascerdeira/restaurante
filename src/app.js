const express = require('express');
const server = express();

const cadastro = require('../routes/cadastroRestaurante');
const votos = require('../routes/votos');
//const vencer = require('../routes/vencer')


// informando ao express que vamos usar dados json
server.use(express.json());

server.use('/cadastro', cadastro);

server.use('/votos', votos);

//server.use('/vencedor', vencedor)

server.listen(3031);  
