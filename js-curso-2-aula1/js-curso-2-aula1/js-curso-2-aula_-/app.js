let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número de 1 a 50');

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas == 1 ? 'tentativa' : 'tentativas';
        let mensagemTentativas = `Você descobriu o número secreto em ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
    }
    else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        }
        else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
    }
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 50 + 1);
}