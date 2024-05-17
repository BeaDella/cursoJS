alert('Seja bem-vindo ao jogo do número secreto!');
let numeroMaximo = 50;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(`O número secreto é ${numeroSecreto}`);
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número de 1 a ${numeroMaximo}:`);

    if (chute == numeroSecreto) {
        break;
    }
    else {
        if (chute < numeroSecreto) {
            alert(`O número secreto é maior que ${chute}`);
        }
        else {
            alert(`O número secreto é menor que o ${chute}`);
        }
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Parabéns! Você descobriu o número secreto ${numeroSecreto} em ${tentativas} ${palavraTentativa}.`);