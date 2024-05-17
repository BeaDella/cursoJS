let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function clicarConsole() {
    console.log('O botão foi clicado');
}

function clicarAlerta() {
    alert('Eu amo JS');
}

function clicarPrompt() {
    let cidade = prompt('Digite o nome de uma cidade no Brasil:');
    alert(`Estive em ${cidade} e lembrei de você.`);
}

function clicarSoma() {
    let numero1 = parseInt(prompt('Digite o primeiro número:'));
    let numero2 = parseInt(prompt('Digite o segundo número:'));
    let soma = numero1 + numero2;
    alert(`A soma de ${numero1} e ${numero2} é igual a ${soma}`)
}