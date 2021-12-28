

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







function data() {
    
    const dia = datasHora.getDate();
    const mes = datasHora.getUTCMonth();
    const anoAtual = datasHora.getFullYear();

    const data_br = [dia, mes + 1 , anoAtual].join('/')

    return  data_br;
} 

function horario() {
   
    const horas = datasHora.getHours();
    const minutos = datasHora.getMinutes();
    const horaBr = [horas , minutos].join(':');

    return horaBr;
}