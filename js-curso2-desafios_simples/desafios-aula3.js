//Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura,
//em metros, e peso, em quilogramas, que serão recebidos como parâmetro
function calcularIMC(altura, peso) {
    return peso / (altura **2);
}

let imc = calcularIMC(1.74, 85);
alert(imc);

//Crie uma função que calcule o valor do fatorial de um número passado como parâmetro
function calcularFatorial(numero) {
    if (numero == 0 || numero == 1) {
        return 1;
    }

    let contador = numero - 1;
    let soma = numero * contador;
    while (contador > 0) {
        if (contador != 1) {
            contador--;
            soma *= contador;
        }
        else {
            break;
        }
    }
    return soma;
}

let fatorial = calcularFatorial(3);
alert(fatorial);

//Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor
//equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80
function converterDolarParaReal(valorDolar) {
    return valorDolar * 4.8
}

let valor = converterDolarParaReal(34.5);
alert(valor);

//Crie uma função que mostre na tela a área e o perímetro de uma sala retangular,
//utilizando altura e largura que serão dadas como parâmetro
function medidasSalaRetangular(altura, largura) {
    let area = altura * largura;
    let perimetro = (altura * 2) + (largura * 2);
    let resultado = `Área = ${area} / Perímetro = ${perimetro}`;
    return resultado;
}

let mensagem1 = medidasSalaRetangular(5, 9);
alert(mensagem1);

//Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu
//raio que será fornecido como parâmetro. Considere Pi = 3,14
function medidasSalaCircular(raio) {
    let area = 3.14 * (raio **2);
    let perimetro = 2 * 3.14 * raio;
    let resultado = `Área = ${area} / Perímetro = ${perimetro}`;
    return resultado;
}

let mensagem2 = medidasSalaCircular(4);
alert(mensagem2);

//Crie uma função que mostre na tela a tabuada de um número dado como parâmetro
function calcularTabuada(numero) {
    let contador = 0;
    let tabuada = '';
    while (contador <= 10) {
        let resultado = numero * contador;
        tabuada = tabuada + (numero + ' x ' + contador + ' = ' + resultado + '\n');
        contador++;
    }
    return tabuada;
}

let mensagem3 = calcularTabuada(9);
alert(mensagem3);