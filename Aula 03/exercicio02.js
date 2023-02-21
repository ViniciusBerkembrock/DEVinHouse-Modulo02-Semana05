// function tempoDeProcessamento(cb) {
//     const milliseconds = Math.random() * 5000;
//     setTimeout(() => cb(milliseconds / 1000), milliseconds)
// }


// function requisicaoAssincrona (identificador) {
//     return new Promise(resolve => {
//         tempoDeProcessamento(tempo => resolve(`Finalizando a execução ${identificador} em ${tempo} segundos`));
//     });
// }

// requisicaoAssincrona(1).then(texto => console.log(texto));
// requisicaoAssincrona(2).then(texto => console.log(texto));
// requisicaoAssincrona(3).then(texto => console.log(texto));
// console.log('Este texto foi escrito após a execução de todas as chamadas de métodos');

function tempoDeProcessamentoAssincrono(cb) {
    const milliseconds = Math.random() * 5000;
    setTimeout(() => cb(milliseconds / 1000), milliseconds)
}

function requisicaoAssincrona( identificador ) {
    return new Promise (resolve => {
        tempoDeProcessamentoAssincrono(tempo => resolve(`Finalizando a exeução ${identificador} em ${tempo} segundos`))
    })
}

requisicaoAssincrona(1).then(texto => console.log(texto))
requisicaoAssincrona(2).then(texto => console.log(texto))
requisicaoAssincrona(3).then(texto => console.log(texto))
requisicaoAssincrona(4).then(texto => console.log(texto))
requisicaoAssincrona(5).then(texto => console.log(texto))
requisicaoAssincrona(6).then(texto => console.log(texto))
requisicaoAssincrona(7).then(texto => console.log(texto))
requisicaoAssincrona(8).then(texto => console.log(texto))
requisicaoAssincrona(9).then(texto => console.log(texto))