function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let minimo = parseInt(document.getElementById('de').value);
    let maximo = parseInt(document.getElementById('ate').value);

    let numerosSorteados = [];
    let numeroGerado;

    for (let i = 0; i < quantidade; i++) {
        numeroGerado = gerarNumeroAleatorio(minimo, maximo);
        numerosSorteados.push(numeroGerado);
    }

    alert(numerosSorteados);
}

function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}