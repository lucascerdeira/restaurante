module.exports = function requisitos() {
    // bloco do Requisito Funcional 1 e 2
    const inicio_votacao = new Date('9:00:00');
    const termino_votacao = new Date('11:50:00');
    const hr = horario()
    

    if (horario >= inicio_votacao && horario <= termino_votacao) {
        console.log('Votação iniciada')
    } else {
        console.log('Votação encerrada')
    }
}
