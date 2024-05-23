let botaoReiniciar = document.getElementById('btn-reiniciar');
let resultado = document.getElementById('resultado');

function sortear() {

    let quantidade = parseInt(document.getElementById('quantidade').value);
    let minimo = parseInt(document.getElementById('de').value);
    let maximo = parseInt(document.getElementById('ate').value);
    let numerosSorteados = [];
    let numeroGerado;

    if (minimo >= maximo || (maximo - minimo + 1) < quantidade) {
        alert('Não é possível fazer o sorteio com os números informados.\nPor favor, preencha novamente com um intervalo maior.');
        limparCampos();
        return;
    }

    for (let i = 0; i < quantidade; i++) {
        numeroGerado = gerarNumeroAleatorio(minimo, maximo);
        
        if (numerosSorteados.includes(numeroGerado)) {
            numeroGerado = gerarNumeroAleatorio(minimo, maximo);
            //precisa decrementar para desconsiderar os números já sorteados do contador
            i--;
        }
        else {
            numerosSorteados.push(numeroGerado);
        }
    }
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${numerosSorteados}</label>`;

    //if para poder sortear várias vezes seguidas na mesma configuração sem alterar o botão reiniciar a cada click
    if (botaoReiniciar.className == 'container__botao-desabilitado') {
        alteraStatusBotao();
    }
}

function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alteraStatusBotao() {

    if (botaoReiniciar.classList.contains('container__botao-desabilitado')) {
        botaoReiniciar.classList.remove('container__botao-desabilitado');
        botaoReiniciar.classList.add('container__botao');
    }
    else if (botaoReiniciar.classList.contains('container__botao')){
        botaoReiniciar.classList.remove('container__botao');
        botaoReiniciar.classList.add('container__botao-desabilitado');
    }
}

function limparCampos() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
}

function reiniciar() {
    
    //if para não executar a função onclick se o botão estiver desabilitado
    if (botaoReiniciar.className == 'container__botao') {
        limparCampos();
        resultado.innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
        alteraStatusBotao();
    } else {
        return;
    }
}