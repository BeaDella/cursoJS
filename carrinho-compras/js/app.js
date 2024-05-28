let carrinho = [];
let itensCarrinho = document.querySelector('.carrinho__produtos__produto');
let resultado = document.getElementById('valor-total');
let produtoSelecionado = document.querySelector('#produto');
let quantidade = document.querySelector('input');
limpar();

function adicionar() {

    let nomeProduto;
    let valorProduto;
    let valorTotal;
    let total = 0;

    if (produtoSelecionado.value == 'Fone de ouvido - R$100') {
        nomeProduto = 'Fone de ouvido';
        valorProduto = 100;
    }
    else if (produtoSelecionado.value == 'Celular - R$1400') {
        nomeProduto = 'Celular';
        valorProduto = 1400;
    }
    else if (produtoSelecionado.value == 'Óculos VR - R$5000') {
        nomeProduto = 'Óculos VR';
        valorProduto = 5000;
    }

    valorTotal = quantidade.value * valorProduto;
    carrinho.push(valorTotal);

    if (itensCarrinho.innerHTML == '<section class="carrinho__produtos__produto"></section>') {
        itensCarrinho.innerHTML = itensCarrinho.innerHTML + `<span class="texto-azul">${quantidade.value}x
    </span> ${nomeProduto} <span class="texto-azul">R$${valorProduto}</span>`;
    }
    else {
        itensCarrinho.innerHTML = itensCarrinho.innerHTML + '<br>' + `<span class="texto-azul">${quantidade.value}x
    </span> ${nomeProduto} <span class="texto-azul">R$${valorProduto}</span>`;
    }
    
    for (let i = 0; i < carrinho.length; i++) {
        total += carrinho[i];
    }
    resultado.textContent = `R$${total}`;
    quantidade.value = '';
}

function limpar() {
    carrinho = [];
    itensCarrinho.innerHTML = '<section class="carrinho__produtos__produto"></section>';
    resultado.textContent = 'R$0';
}