//Criar uma função que exibe "Olá, mundo!" no console
function olaMundo() {
    console.log('Ola, Mundo!');
}

olaMundo();

//Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console
function olaNome(nome) {
    console.log(`Ola, ${nome}!`);
}

olaNome('Beatriz');

//Criar uma função que recebe um número como parâmetro e retorna o dobro desse número
function dobrarNumero(numero) {
    return numero * 2;
}

let resultado1 = dobrarNumero(9);
alert(resultado1);

//Criar uma função que recebe três números como parâmetros e retorna a média deles
function mediaTresNumeros(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}

let resultado2 = mediaTresNumeros(8, 3, 7);
alert(resultado2);

//Criar uma função que recebe dois números como parâmetros e retorna o maior deles
function maiorNumero(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

let resultado3 = maiorNumero(3, 8);
alert(resultado3);

//Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function numeroAoQuadrado(numero) {
    return numero * numero;
}

let resultado4 = numeroAoQuadrado(5);
alert(resultado4);