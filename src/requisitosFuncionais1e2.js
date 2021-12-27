// Pegando a hora exata 
const now = new Date();
var hora = now.getHours() // passando para variavel 
var minutos = now.getUTCMinutes()
const horario = [hora, minutos].join(':')

// forçando a hora 
const inicio_votacao = new Date('9:00:00');
const termino_votacao = new Date('11:50:00');


console.log(horario)

// condição da votação 

if (horario >= inicio_votacao && horario <= termino_votacao) {
    console.log('Votação iniciada')
} else {
    console.log('Votação encerrada')
}