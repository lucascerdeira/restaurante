module.exports = function horario() {
    const datasHora = new Date();
    const horas = datasHora.getHours();
    const minutos = datasHora.getMinutes();
    const horaBr = [horas , minutos].join(':');

    return horaBr;
}