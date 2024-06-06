//Crie uma função que valide se um número é positivo, negativo ou zero.
let num = prompt('Digite um número:');
verificarSinal(num);

function verificarSinal(numero) {
    if (numero > 0) {
        console.log('O número é positivo');
    } else if (numero < 0){
        console.log('O número é negativo');
    } else {
        console.log('O número é zero');
    }
}

//Implemente uma função que verifique se uma pessoa é maior de idade.
let idade = prompt('Informe a idade:');
verificarMaioridade(idade);

function verificarMaioridade(idade) {
    if (idade >= 18) {
        console.log('A pessoa é maior de idade');
    } else {
        console.log('A pessoa é menor de idade');
    }
}

//Desenvolva uma função que valide se uma string é vazia ou não.
let string = prompt('Digite algo ou não:');
valorString(string);

function valorString(string) {
    if (string == '') {
        console.log('A string está vazia');
    } else {
        console.log(`Você digitou "${string}"`);
    }
}

//Crie uma função que determine se um ano é bissexto
let ano = prompt('Digite um ano:');
anoBissexto(ano);

function anoBissexto(ano) {
    if (ano % 4 == 0) {
        console.log('O ano informado é bissexto');
    } else {
        console.log('O ano informado não é bissexto');
    }
}

//Desenvolva uma função que receba um array como parâmetro e retorne o seu tamanho.
let trimestre = ['janeiro', 'fevereiro', 'março', 'abril'];
tamanhoArray(trimestre);

function tamanhoArray(array) {
    console.log(array.length);
}

//Crie um array e utilize a função includes para verificar se um elemento específico está presente
let frutas = ['maçã', 'uva', 'banana'];
verificarArray('morango');

function verificarArray(fruta) {
    if (frutas.includes(fruta)) {
        console.log('true');
    } else {
        console.log('false');
    }
}

//Crie uma função que receba um array de números e retorne a soma dos elementos pares e o
//produto dos elementos ímpares.
let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
somaParProdutoImpar(lista);

function somaParProdutoImpar(array) {

    let soma = 0;
    let produto = 1;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            soma += array[i];
        } else {
            produto *= array[i];
        }
    }
    console.log(soma, produto);
    return soma, produto;
}