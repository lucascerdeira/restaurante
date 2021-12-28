module.exports = function datas() {
    const datasHora = new Date();
    const dia = datasHora.getDate();
    const mes = datasHora.getUTCMonth();
    const anoAtual = datasHora.getFullYear();

    const data_br = [dia, mes + 1 , anoAtual].join('/')

    return  data_br;
} 



