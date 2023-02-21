function tempoDeProcessamento() {
    const milliseconds = Math.random() * 5000;
    const start = new Date().getTime();
    let end = 0;
    while ((end - start) < milliseconds) {
        end = new Date().getTime();
    }
    return milliseconds / 1000;
}


function requisicaoSincrona (identificador) {
    const tempo = tempoDeProcessamento();
    return `Finalizando a execução ${identificador} em ${tempo} segundos`
}

const req1 = requisicaoSincrona(1)
console.log(req1);
const req2 = requisicaoSincrona(2)
console.log(req2);
const req3 = requisicaoSincrona(3)
console.log(req3);

console.log('Este texto foi escrito após a execução de todas as chamadas de métodos');

