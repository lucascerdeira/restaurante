
/* gerando datas extas  
const data = new Date();
const mes = data.getMonth();
const dia = data.getDate();
const anoAtual = data.getFullYear();
*/
function data() {
    const data = new Date();
    const mes = data.getMonth();
    const dia = data.getDate();
    const anoAtual = data.getFullYear();
    const data_br = [mes + dia + anoAtual].join('/')

    return  data_br
} 


console.log(data())


/* gerando um hr pt-br
const horas = data.getHours();
const minutos = data.getMinutes();
const horario = [horas + minutos].json
*/